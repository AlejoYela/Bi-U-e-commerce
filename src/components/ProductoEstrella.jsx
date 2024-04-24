import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function ProductoEstrella() {
    return (
        <>
            <Row className='bg-primary w-100'>
                <Col>
                    <Row>
                        <Image src='images/faces/1.png'/>
                    </Row>
                    <Row>
                        <Image src='images/5.png'/>
                    </Row>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                    <div>
                        <p className='text-light fw-light fs-5'>Descubre la colección</p>
                        <h3 className='m-0 display-5 text-light'>Cover All</h3>
                        <p className='text-light fw-light'>Para lucir una piel radiante, incluso en las sotuaciones más extremas</p>
                        <Button variant='outline-light fw-light' size='lg'>Botón</Button>
                    </div>
                </Col>
                <Col className='p-0'>
                    <Row>
                        <Image src='images/faces/3.png'/>
                    </Row>
                    <Row>
                        <Image src='images/4.png'/>
                    </Row>
                </Col>
                <Col className='d-flex align-items-center overflow-auto p-0'>
                    <Row>
                        <Image src="images/specials/2.png"/>
                    </Row>
                </Col>
            </Row>
        </>
        // <Container className="d-flex flex-column p-0 my-5">
        //     <Row className="flex-wrap-reverse flex-md-nowrap">
        //         <Col xs={12} md={6} className="d-flex  flex-column my-3 justify-content-center px-5">
        //             <h2 className="text-end fs-5 fw-light text-uppercase lh-sm mb-4">Lleva ahora tu</h2>
        //             <h3 className="text-end display-4 fw-light">Suero Revitalizante</h3>
        //             <p className="text-end lead text-muted mb-0">Con Retinol y Vitamina B3 para una piel radiante y rejuvenecida.</p>
        //             <Button variant="outline-primary" size="lg" className="mt-4">Preordenar hasta con 30% OFF →</Button>
        //         </Col>
        //         <Col xs={12} md={6} className="my-3">
        //             <Image src="images/specials/1.png" alt="Producto estrella" fluid className="rounded-3 shadow" />
        //         </Col>
        //     </Row>
        // </Container>
    );
}

export default ProductoEstrella;
