import { useState } from 'react';
import { Container, Button, Modal, Image, Col, Row, CloseButton } from 'react-bootstrap';
import Variantes from './Variantes';

function ModalQuick({ state, name, img, price, stock, colors }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hover, setHover] = useState(false);

    return (
        <>
            <Button
                className={state ? "visible boton bg-transparent position-absolute top-50 start-50 translate-middle" : "invisible boton bg-transparent position-absolute top-50 start-50 translate-middle"}
                variant="outline-primary border-0"
                onClick={handleShow}
            >
                <img src={state ? 'icons/search-vine.svg' : 'icons/search-white.svg'} alt="Buscar" width={50} height={50} />
                <p className='fs-6 text-primary'>Vista rápida</p>
            </Button>

            <Modal show={show} onHide={handleClose} centered size='lg' className='text-primary'>

                <Modal.Body>
                    <div className='position-absolute top-0 end-0 m-3' onClick={handleClose}>
                        <CloseButton />
                    </div>

                    <Container fluid>
                        <Row className='my-3 mx-auto gap-5'>
                            <Col className='position-relative d-flex justify-content-center' xl={4}>
                                <Image className='rounded shadow img-fluid' src={img} >
                                </Image>
                                <Button
                                    className="boton position-absolute top-0 start-0 mx-2"
                                    variant="outline-primary border-0 bg-transparent"
                                >
                                    <a href="#">
                                        <img src='icons/fav.svg' alt="Buscar" width={30} />
                                    </a>
                                </Button>
                            </Col>
                            <Col>
                                <Container width='250svw' >
                                    <h2 className='fs-5 fw-light'>{name.toUpperCase()}</h2>
                                    <p >{`${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'COP' }).format(
                                        price,
                                    )}`}</p>
                                    <hr />

                                    <Variantes colors={colors} />
                                    {stock ?

                                        <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="icons/check.svg" alt="" /> Producto disponible</p> :

                                        <p style={{ fontSize: '0.9rem' }} className=' d-inline-block text-danger fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="icons/alert.svg" alt="" /> Producto agotado</p>}
                                    <div className='mb-3 '>


                                    </div>
                                    <Container className='p-0'>
                                        <Row class="d-flex gap-3">

                                            <Col className='d-grid'>
                                                <Button variant="outline-primary fw-light" onClick={handleClose}>
                                                    Ver detalles
                                                </Button>
                                            </Col>
                                            <Col className='d-grid'>
                                                <Button
                                                    className="boton"
                                                    variant="outline-primary border-1 fw-light"
                                                    onMouseEnter={() => setHover(true)}
                                                    onMouseLeave={() => setHover(false)}
                                                >
                                                    <a href="#" className='d-inline-block align-text-bottom'>
                                                        <img src={hover ? 'icons/cart-white.svg' : 'icons/cart.svg'} alt="Buscar" width={20} />
                                                    </a>
                                                    {' '} Añadir a la bolsa
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalQuick;