import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

import Logo from '../static/nune_logo.svg'

const Menu = (props) => {
		const pathname = window.location.pathname
    return(
        <Navbar collapseOnSelect expand="md">
            <Navbar.Brand href="/">
                <img src={Logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav>
									<Nav.Link href="/" className={pathname === '/' && 'active'}>Home</Nav.Link>
											<Nav.Link href="/about" className={pathname === '/about' && 'active'}>About</Nav.Link>
											<Nav.Link href="/projects" className={pathname === '/projects' && 'active'}>UX/UI</Nav.Link>
											<Nav.Link href="/animation" className={pathname === '/animation' && 'active'}>Animation</Nav.Link>
											<Nav.Link href="/contact" className={pathname === '/contact' && 'active'}>Contact</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Menu