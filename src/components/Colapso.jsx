import React from 'react';
import Nav from 'react-bootstrap/Nav';
import OffCanvas from './OffCanvas';

function Colapso() {
    return (
        <Nav className="mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className='text-primary-emphasis fs-5' href="#action1">Maquillaje</Nav.Link>
            <Nav.Link className='text-primary-emphasis fs-5' href="#action2">Skincare</Nav.Link>
            <OffCanvas />
        </Nav>
    );
}

export default Colapso;