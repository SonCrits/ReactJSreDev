import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

import Home from './components/HomeComponent';
  
function App() {
    return (
        <div >
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Phần Mềm Quản Lý Nhân Sự V1.0</NavbarBrand> 
            </Navbar>
            <Home />
        </div >
    );
}
  
export default App;