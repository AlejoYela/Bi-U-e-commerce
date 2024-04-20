import React from 'react';
import { Container, Image, Button, Col, Row } from 'react-bootstrap';

function ProductoEstrella() {
    return (
        <Container className='p-0 border' fluid>
            <Row>
                <Col xs={4}>
                    <Image src='images/2.png' fluid className='w-100'></Image>
                </Col>
                <Col className='d-grid m-5  py-4 text-center'>


                    <h3 className='mb-1 fw-light fst-italic fs-5'>L L E V A &nbsp;A H O R A &nbsp;T U</h3>
                    <h2 className='fw-light'>Suero Revitalizante</h2>
                    <h4 className='fw-light text-break'>Con Retinol y Vitamina B3</h4>

                    <Button fluid variant="outline-primary" className="d-lg-inline-block fw-light mb-1">Preordenar hasta con 30% OFF →</Button>

                </Col>
                <Col xs={4}>
                    <Image src='images/2.png' fluid className='w-100'></Image>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductoEstrella;
