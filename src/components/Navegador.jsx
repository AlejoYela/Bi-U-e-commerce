import React from 'react';
import Buscador from './Buscador';
import OffCanvas from './OffCanvas';
import renderTooltip from '../hooks/renderTooltip.js';
import { Container, Navbar, Nav, Button, Badge, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navegador() {
    const tooltipText = {
        user: 'Usuario',
        cart: 'Bolsa',
        fav: 'Favoritos'
    };

    return (
        <Navbar expand="lg" className="bluring bg-secondary px-4 sticky-top bg-opacity-50">
            <Container fluid>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Navbar.Brand className='text-primary fw-medium'>
                        <img
                            alt=""
                            src="icons/logo.svg"
                            width="40"
                            height="30"
                            className="d-inline-block align-top fs-3"
                        />
                        {' '}Bi･U Cosmetics
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>
                        <OffCanvas />
                        <Nav.Link className='text-primary fs-5 fw-light' href="#Favoritos">Favoritos</Nav.Link>
                        <Nav.Link className='text-primary fs-5 fw-light' href="#action2">Contacto</Nav.Link>
                    </Nav>
                    <Nav className='d-flex flex-row-reverse'>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            overlay={renderTooltip(tooltipText, 'user')}
                        >
                            <Button className="boton" variant="primary border-0 bg-transparent">
                                <a href="#"><img src='icons/user.svg' alt="Usuario" /></a>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            overlay={renderTooltip(tooltipText, 'fav')}
                        >
                            <Button className="boton" variant="outline-primary border-0 bg-transparent">
                                <a href="#"><img src='icons/fav.svg' alt="Favoritos" /><Badge bg="primary">0</Badge></a>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            overlay={renderTooltip(tooltipText, 'cart')}
                        >
                            <Button className="boton" variant="outline-primary border-0 bg-transparent">
                                <a href="#"><img src='icons/cart.svg' alt="Carrito" /><Badge bg="primary">0</Badge></a>
                            </Button>
                        </OverlayTrigger>
                        <Buscador />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegador;
