import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import StaffList from './components/HomeComponent';


function App () {
  return (
    <div className="App">
      <Navbar dark color='primary' expand='md'>
        <div className='container'>
          <NavbarBrand href='/' className='mr-auto'>
            Ứng dụng quản lý nhân sự v1.0
          </NavbarBrand>
        </div>
      </Navbar>
      <StaffList />
    </div>
  );
}

export default App;
