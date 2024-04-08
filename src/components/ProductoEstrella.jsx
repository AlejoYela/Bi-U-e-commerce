import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';

function ProductoEstrella() {
    return (
        <Container className='p-0 position-relative' fluid>
            <Image src='images/1.png' fluid className='w-100'></Image>
            <div className="text-overlay-2 text-primary bg-transparent">
                <h3 className='fs-6 mb-1'>L L E V A &nbsp;A H O R A &nbsp;T U</h3>
                <h2 className='fw-lighter fst-italic my-0' style={{ fontSize: '4.4rem' }}>Primer Hidratante</h2>
                <h4 className='fs-5 fw-normal mb-4'>Hasta con un 30% de descuento en preventa</h4>

                <Button variant="outline-primary" className="d-lg-inline-block fw-light" size="lg">Ver Promoción</Button>
            </div>
        </Container>
    );
}

export default ProductoEstrella;
