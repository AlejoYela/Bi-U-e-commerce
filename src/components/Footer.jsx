import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {
    return (
        <Navbar bg="primary" variant="dark" className="justify-content-center">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <img src="icons/wpp.svg" alt="Whatsapp" title="Whatsapp" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="icons/ig.svg" alt="Instagram" title="Instagram" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="icons/github.svg" alt="Github" title="Github" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="icons/linkedin.svg" alt="Linkedin" title="Linkedin" />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Footer;
