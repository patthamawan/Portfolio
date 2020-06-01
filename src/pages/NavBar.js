import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar>
            <Navbar.Brand href="/">NUNE .</Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse className="justify-content-end">  
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar