import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from './data';
import './App.css';
const Custname = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      setContacts(data);
    };

    fetchData();
  }, []);

  const handleNameClick = (name) => {

    navigate(`/CustDetail?name=${name}`);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filterContacts = () => {
      if (searchTerm === '') {
        setFilteredContacts(contacts);
      } else {
        const filtered = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredContacts(filtered);
      }
    };

    filterContacts();
  }, [contacts, searchTerm]);




  return (
    <div className='container'>
      <h1>Contacts</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <Link to={`/CustDetail?name=${contact.name}`}>{contact.name}</Link>
              </td>
              <td>{contact.mobile}</td>
            </tr>
          ))}
        </tbody>





      </table>
    </div>
  );
};

export default Custname;
