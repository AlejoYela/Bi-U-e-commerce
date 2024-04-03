import React from 'react';
import Colapso from './Colapso';
import Buscador from './Buscador';

import { Container, Navbar, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'

function Navegador() {

    const tooltipText = {
        user: 'Usuario',
        cart: 'Carrito', 
        search: 'Buscar'
    };

    const renderTooltip = (props) => (

        <Tooltip id="button-tooltip" {...props}>
            {tooltipText[props]}
        </Tooltip>
    );

    return (
        <Navbar expand="lg" className="bg-secondary px-4 fixed-top">
            <Container fluid>
                <Navbar.Brand className='text-primary fw-medium' href="#home">
                    <img
                        alt=""
                        src="icons/logo.svg"
                        width="40"
                        height="30"
                        className="d-inline-block align-top fs-3"
                    />{' '}
                    BiU Cosmetics
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Colapso />

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 100, hide: 100 }}
                        alt="Usuario"
                        overlay={renderTooltip('user')}
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
                        alt='Carrito'
                        overlay={renderTooltip('cart')}
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

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 100, hide: 100 }}
                        alt='Buscar'
                        overlay={renderTooltip('search')}
                    >
                        <Buscador />
                    </OverlayTrigger>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegador;
