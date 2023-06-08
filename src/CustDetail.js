import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
const CustDetail = () => {
  const [name, setName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [dob, setDob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();




    const queryParams = new URLSearchParams();
    queryParams.set('name', name);
    queryParams.set('dropdown', dropdownValue);
    queryParams.set('dob', dob ? dob.toISOString() : '');


    const url = `/next-page?${queryParams.toString()}`;



    setSubmitted(true);
  };

  /*useEffect(() => {
    // Get the search parameters from the current URL
    const searchParams = new URLSearchParams(window.location.search);

    if (name) {
      setDropdownValue(searchParams.get('dropdown') || '');
      const dobParam = searchParams.get('dob');
      if (dobParam) {
        const dobDate = new Date(dobParam);
        if (!isNaN(dobDate.getTime())) {
          setDob(dobDate);
        }
      }
    }
  }, [name]);*/



  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setName(nameParam);
    }
  }, [location.search]);









  if (submitted) {
    return (
      <div className='container-1'>
        <h1>Submitted Details</h1>
        <div className="detail-box-1">
          <p>Name: {name}</p>

          <p>Customer App:</p>
             <p style={{color:"red" , marginTop:"-20px"}}>{dropdownValue} </p>

          <p>Date of Birth</p> 
          <p style={{color:"red" , marginTop:"-20px"}}>{dob ? dob.toLocaleDateString() : ''}</p>
          <Link className='back' to="/"> Back</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="cdetails">
      <h1>Customer Details</h1>
      <div className="detail-box">

        <p>Customer Name: {name}</p>
        
        <div className="dob">
          <label>Date of Birth</label>
          <DatePicker
            id="dob"
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select date"
          />
        </div>

        <div className="c-dropdown">
          <label>Select App</label>
          <select
            id="dropdown"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
          >
             <option value=""></option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CustDetail;
