import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

function Footer() {
    return (
        <Navbar bg="primary" data-bs-theme="dark" className='text-white justify-content-center' >
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home"><img src="icons/wpp.svg" alt="Whatsapp" title="Whatsapp" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home"><img src="icons/ig.svg" alt="Instagram" title="Instagram" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home"><img src="icons/github.svg" alt="Github" title="Github" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home"><img src="icons/linkedin.svg" alt="Linkedin" title="Linkedin" /></Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>);
}

export default Footer;