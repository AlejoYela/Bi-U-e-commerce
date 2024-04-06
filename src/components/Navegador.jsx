import React from 'react';
import Buscador from './Buscador';
import renderTooltip from '../hooks/renderTooltip.js'

import { Container, Navbar, Nav, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import OffCanvas from './OffCanvas';

function Navegador() {

    const tooltipText = {
        user: 'Usuario',
        cart: 'Bolsa',
        fav: 'Favoritos'
    };

    return (
        <Navbar expand="lg" className="bg-secondary px-4 fixed-top bg-opacity-75">
            <Container fluid>
                <Navbar.Brand className='text-primary fw-medium' href="#home">
                    <img
                        alt=""
                        src="icons/logo.svg"
                        width="40"
                        height="30"
                        className="d-inline-block align-top fs-3"
                    />{' '}
                    Bi･U Cosmetics
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>
                        <OffCanvas />
                        <Nav.Link className='text-primary fs-5 fw-light' href="#Favoritos">Favoritos</Nav.Link>
                        <Nav.Link className='text-primary fs-5 fw-light' href="#action2">Contacto</Nav.Link>
                    </Nav>


                    <Nav>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            alt="Usuario"
                            overlay={renderTooltip(tooltipText, 'user')}
                        >
                            <Button
                                className="boton"
                                variant="primary border-0 bg-transparent"
                                alt="Usuario"
                            >
                                <a href="#">
                                    <img src='icons/user.svg' alt="Buscar" />
                                </a>
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            alt='Favoritos'
                            overlay={renderTooltip(tooltipText, 'fav')}
                        >
                            <Button
                                className="boton"
                                variant="outline-primary border-0 bg-transparent"
                            >
                                <a href="#">
                                    <img src='icons/fav.svg' alt="Buscar" />
                                </a><Badge bg="primary">0</Badge>
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            alt='Carrito'
                            overlay={renderTooltip(tooltipText, 'cart')}
                        >
                            <Button
                                className="boton"
                                variant="outline-primary border-0 bg-transparent"
                            >
                                <a href="#">
                                    <img src='icons/cart.svg' alt="Buscar" />
                                </a><Badge bg="primary">0</Badge>
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
