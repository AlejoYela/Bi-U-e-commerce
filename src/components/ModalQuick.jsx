import { useState } from 'react';
import { Container, Button, Modal, Image, Col, Row } from 'react-bootstrap';

function ModalQuick({ state, name, description, img }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                className={state ? "visible boton bg-transparent position-absolute top-50 start-50 translate-middle" : "invisible boton bg-transparent position-absolute top-50 start-50 translate-middle"}
                variant="outline-primary border-0"
                onClick={handleShow}
            >
                <img src={state ? 'icons/search-vine.svg' : 'icons/search-white.svg'} alt="Buscar" width={80} />
                <p className='fs-5 text-primary'>Vista rápida</p>
            </Button>

            <Modal show={show} onHide={handleClose} centered size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title className='fw-normal fs-2'>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Container fluid>
                        <Row className='m-5 gap-5'>
                            <Col className='d-flex justify-content-center' xl={4}>
                                <Image className='rounded shadow' width='350svw' src={img} ></Image>
                            </Col>
                            <Col >
                                <Container>
                                    <p className='fw-light fs-5'>{description}</p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Ver detalles
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalQuick;