import React,{useState} from "react";
import {
    Button,
    Collapse,
    Input,
    Label,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from 'reactstrap';

import {NavLink} from 'react-router-dom'


function Header() {

    const [isOpenNav, setIsOpenNav] = useState(false);

    const OpenNav = () => {
        setIsOpenNav(!isOpenNav);
    }



    return(
        <Navbar color="success" dark expand="md">
            <NavbarBrand href="/staff" className="mr-auto">
                <img src='/assets/images/ReactJS.png' height='30' width='41' alt="ReactJS" />
            </NavbarBrand>
            <NavbarToggler onClick={OpenNav} />
            <Collapse isOpen={isOpenNav} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to="/staff">
                            <span className="fa fa-user"></span>
                            Nhân Viên
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to="/depart">
                            <span className="fa fa-building"></span>
                            Phòng ban
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/salary'>
                            <span className="fa fa-money"></span>
                            Bảng Lương
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;