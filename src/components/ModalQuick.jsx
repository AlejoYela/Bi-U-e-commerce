import React, { useState } from 'react';
import { Button, Modal, Image, Col, Row, CloseButton, Container } from 'react-bootstrap';
import Variantes from './Variantes';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function ModalQuick({ product, state }) {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    const isProductInCart = checkProductInCart(product)

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

                    <Row className='my-3 mx-auto gap-5'>
                        <Col className='position-relative d-flex justify-content-center' xl={4}>
                            <Image className='rounded shadow ms-5' src={product.api_featured_image} height={250} />
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
                            <Container width='250svw'>
                                <h2 className='fs-5 fw-light' >{product.name.toUpperCase()}</h2>
                                <p >$ {product.price}</p>
                                <hr />
                                <Variantes colors={product.product_colors} />
                                {product.stock ? (
                                    <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="icons/check.svg" alt="" /> Producto disponible</p>
                                ) : (
                                    <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-danger fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="icons/alert.svg" alt="" /> Producto agotado</p>
                                )}
                                <Container className='p-0'>
                                    <Row class="d-flex gap-3">
                                        <Col className='d-grid'>
                                            <Link className="d-grid" style={{ textDecoration: 'none' }} to={`/producto/${product.product_type}/${product.id}`}>
                                                <Button variant="outline-primary fw-light" onClick={handleClose}>Ver detalles</Button>
                                            </Link>
                                        </Col>
                                        <Col className='d-grid'>
                                            <Button
                                                className="boton"
                                                variant="outline-primary border-1 fw-light"

                                                onClick={() => isProductInCart 
                                                    ? removeFromCart(product) 
                                                    : addToCart(product)
                                                }

                                                onMouseEnter={() => setHover(true)}
                                                onMouseLeave={() => setHover(false)}
                                            >
                                                <a href="#" className='d-inline-block align-text-bottom'>
                                                    <img src={isProductInCart ? 'icons/cart-check.svg' : 'icons/cart-add.svg'} alt="Buscar" width={20} />
                                                </a>

                                                {isProductInCart 
                                                    ? ' Quitar de la bolsa' 
                                                    : ' Añadir a la bolsa'
                                                }

                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalQuick;
