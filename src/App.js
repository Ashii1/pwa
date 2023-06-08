import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Custname from './Custname';
import CustDetail from './CustDetail';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Custname />} />
          <Route path="/custDetail" element={<CustDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;