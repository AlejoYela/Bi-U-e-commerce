import { useState } from 'react';
import { Offcanvas, Nav, Accordion, Container, Row, Col, Image } from 'react-bootstrap';


function OffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav.Link className='text-primary fs-5 fw-light' href="#action2" onClick={handleShow}>Categorías</Nav.Link >

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Categorías</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Maquillaje</Accordion.Header>
                            <Accordion.Body>
                                <Container fluid='bg'>
                                    <Col>
                                        <Row>
                                            <a href="">
                                                <p className='position-absolute'>Piel</p>
                                                <Image src="categorias/1.png" fluid className="imagen" />

                                            </a>
                                        </Row>
                                        <Row>
                                            <p className='position-absolute'>Labios</p>
                                            <Image src="categorias/2.png" fluid className="imagen" />
                                        </Row>
                                        <Row>
                                            <p className='position-absolute'>Ojos</p>
                                            <Image src="categorias/3.png" fluid className="imagen" />
                                        </Row>
                                    </Col>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Skincare
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container fluid='bg'>
                                    <Row>
                                        <Col>
                                            <img src="logo192.png" alt="" />
                                            <p>Limpiadores</p>
                                        </Col>
                                        <Col>
                                            <img src="logo192.png" alt="" />
                                            <p>Hidratantes</p>
                                        </Col>
                                        <Col>
                                            <img src="logo192.png" alt="" />
                                            <p>Exfoliantes</p>
                                        </Col>

                                        <Col>
                                            <img src="logo192.png" alt="" />
                                            <p>Protectores solares</p>
                                        </Col>
                                        <Col>
                                            <img src="logo192.png" alt="" />
                                            <p>Tónicos</p>
                                        </Col>

                                        <Col>
                                            <img src="logo192.png" alt="" />
                                            <p>Sérums</p>
                                        </Col>

                                    </Row>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default OffCanvas;