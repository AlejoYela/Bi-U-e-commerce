import React from 'react';
import Nav from 'react-bootstrap/Nav';
import OffCanvas from './OffCanvas';
function Colapso() {
    return (
        <Nav className="mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className='text-primary-emphasis' href="#action1">Maquillaje</Nav.Link>
            <Nav.Link className='text-primary-emphasis' href="#action2">Skincare</Nav.Link>
            <OffCanvas />
            <Nav.Link href="#" disabled className='text-primary-emphasis'>
                Nosotros
            </Nav.Link>
        </Nav>
    );
}

export default Colapso;