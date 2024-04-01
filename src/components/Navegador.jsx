import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Colapso from './Colapso';
import Buscador from './Buscador';

function Navegador() {
    return (
        <Navbar expand="lg" className="bg-primary-subtle px-3">
            <Container fluid>
                <Navbar.Brand className='text-primary-emphasis fw-bolder' href="#home">
                    <img
                        alt=""
                        src="logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top fs-4"
                    />{' '}
                    Bi ♥ u Cosmetics
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Colapso />
                    <Buscador />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegador;
