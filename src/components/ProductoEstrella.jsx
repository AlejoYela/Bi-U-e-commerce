import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function ProductoEstrella() {
    return (
        <Container className="d-flex flex-column p-0 my-5">
            <Row className="flex-wrap-reverse flex-md-nowrap">
                <Col xs={12} md={6} className="d-flex  flex-column my-3 justify-content-center px-5">
                    <h2 className="text-end fs-5 fw-light text-uppercase lh-sm mb-4">Lleva ahora tu</h2>
                    <h3 className="text-end display-3 fw-light">Suero Revitalizante</h3>
                    <p className="text-end lead text-muted mb-0">Con Retinol y Vitamina B3 para una piel radiante y rejuvenecida.</p>
                    <Button variant="outline-primary" size="lg" className="mt-4">Preordenar hasta con 30% OFF →</Button>
                </Col>
                <Col xs={12} md={6} className="my-3">
                    <Image src="images/2.png" alt="Producto estrella" fluid className="rounded-3 shadow" />
                </Col>
            </Row>
        </Container>
    );
}

export default ProductoEstrella;
