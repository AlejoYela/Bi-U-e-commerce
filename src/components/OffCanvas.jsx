import { useState } from 'react';
import { Offcanvas, Nav, Accordion, Container, Row, Col, Image } from 'react-bootstrap';
import TargetCategoria from './TargetCategoria';


function OffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav.Link className='text-primary fs-5 fw-light' href="#action2" onClick={handleShow}>Categorías</Nav.Link >

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fw-light fs-2'>Categorías</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Maquillaje</Accordion.Header>
                            <Accordion.Body>
                                <Container fluid='bg'>
                                    <Col>
                                        <TargetCategoria title={"Piel"} src={"categorias/1.png"} />
                                        <TargetCategoria title={"Labios"} src={"categorias/2.png"} />
                                        <TargetCategoria title={"Ojos"} src={"categorias/3.png"} />
                                    </Col>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Skincare
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container fluid='bg'>
                                    <Col>
                                        <TargetCategoria title={"Limpiadores"} src={"categorias/4.png"} />
                                        <TargetCategoria title={"Hidratantes"} src={"categorias/5.png"} />
                                        <TargetCategoria title={"Exfoliantes"} src={"categorias/6.png"} />
                                        <TargetCategoria title={"Protectores solares"} src={"categorias/7.png"} />
                                        <TargetCategoria title={"Tónicos"} src={"categorias/8.png"} />
                                        <TargetCategoria title={"Serums"} src={"categorias/9.png"} />
                                    </Col>
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