import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';

function ProductoEstrella() {
    return (
        <Container className='p-0 position-relative' fluid>
            <Image src='images/1.png' fluid className='w-100'></Image>
            <Container fluid className="w-50 position-absolute top-50 end-0 translate-middle-y text-primary me-3">

                <h3 className='mb-1 fw-light fst-italic' style={{ fontSize: '2.2svw' }}>L L E V A &nbsp;A H O R A &nbsp;T U</h3>
                <h2 className='fw-lighter  my-0' style={{ fontSize: '5.5svw' }}>Primer Hidratante</h2>
                <h4 className='fw-normal mb-4 text-break' style={{ fontSize: '2svw' }}>Hasta con un 30% de descuento en preventa</h4>

                <Button fluid variant="outline-primary" className="d-lg-inline-block fw-lighter border-1" size="lg" style={{ fontSize: '4vw' }}>Ver Promoción</Button>
            </Container>
        </Container>
    );
}

export default ProductoEstrella;
