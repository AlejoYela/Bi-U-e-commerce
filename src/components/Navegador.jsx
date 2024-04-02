import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Colapso from './Colapso';
import Buscador from './Buscador';

function Navegador() {
    return (
        <Navbar expand="lg" className="bg-secondary px-4 fixed-top">
            <Container fluid>
                <Navbar.Brand className='text-primary fw-medium' href="#home">
                    <img
                        alt=""
                        src="logo.svg"
                        width="40"
                        height="30"
                        className="d-inline-block align-top fs-3"
                    />{' '}
                    BiU Cosmetics
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
