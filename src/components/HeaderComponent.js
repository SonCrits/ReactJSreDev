import React, {Component} from "react";
import { Jumbotron, Navbar, NavbarBrand, 
    Nav,NavbarToggler,Collapse,NavItem,
    Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Input,Label
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    // Open Nav Bar
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    // Open Login Form
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    // Button Login Form hiển thị values vừa nhập trong form
    handleLogin(event) {
        alert('username is :' + this.username.value +
        ' pass is : ' + this.password.value + 
        ' remember is : ' + this.remember.checked);

        event.preventDefault();
        this.toggleModal();
    }

    render(){
        return(
            <div>
                {/* Nav bar */}
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href='/' className='mr-auto'>
                            <img src="assets/images/logo.png" alt='Ristorante'
                                width='41' height='30' />
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className="fa fa-home fa-lg"></span>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <span className="fa fa-info fa-lg"></span>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <span className="fa fa-list fa-lg"></span>
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        <span className="fa fa-card fa-lg"></span>
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {/* Button Open Login Form */}
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration form the World's</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                {/* Login Form */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username'
                                    innerRef={(input => this.username = input)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>PassWord</Label>
                                <Input type='password' id='password' name='password'
                                    innerRef={(input => this.password = input)} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check htmlFor='remember'>
                                    <Input type='checkbox' id='remember' name='remember'
                                        innerRef={(input => this.remember = input)} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Header;