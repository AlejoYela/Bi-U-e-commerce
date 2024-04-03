import React from 'react';
import {Nav} from 'react-bootstrap';
import OffCanvas from './OffCanvas';

function Colapso() {
    return (
        <Nav className="mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <OffCanvas />
            <Nav.Link className='text-primary fs-5 fw-light' href="#action1">Favoritos</Nav.Link>
            <Nav.Link className='text-primary fs-5 fw-light' href="#action2">Contacto</Nav.Link>
        </Nav>
    );
}

export default Colapso;