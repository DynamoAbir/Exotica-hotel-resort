import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../Images/icon/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='ms-5' href="/">Home</Nav.Link>
                            <Nav.Link className='ms-5' href="/rooms">Rooms</Nav.Link>
                            <Nav.Link className='ms-5' href="/booking">Booking</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;