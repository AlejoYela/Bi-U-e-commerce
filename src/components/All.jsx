import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, ListGroup, Button, Offcanvas, Form } from 'react-bootstrap';
import axios from 'axios';
import CardFav from './CardFav';

function All() {
    const [producto, setProducto] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(12);
    const [loadMore, setLoadMore] = useState(true);
    const [show, setShow] = useState(false);
    const productoFiltradoRef = useRef([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios(`http://makeup-api.herokuapp.com/api/v1/products.json`)
            .then(({ data }) => {
                setProducto(data);
                productoFiltradoRef.current = data;
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // Verifica si existe al menos un producto filtrado
        if (producto.length > 0) {
            productoFiltradoRef.current = producto;
        }
    }, [producto]);

    const handleLoadMore = () => {
        setCardsToShow(cardsToShow + 12);
        if (cardsToShow >= producto.length) {
            setLoadMore(false);
        }
    };

    return (
        <Container fluid='md'>
            <h2 className='text-center my-5 text-uppercase fw-light fs-3'>Todos los productos</h2>

            <div className='d-flex gap-3 text-center justify-content-center mb-5 bg-secondary py-2'>
                <p className='m-0 p-0 fw-light fs-5'>Maquillaje</p>
                <div className='d-flex align-items-center'>
                    <Form.Check
                        type="switch"
                        id="custom-switch-lg"
                        size="lg"
                        style={{ transform: 'scale(1.5)' }} 
                    />
                </div>
                <p className='m-0 p-0 fw-light fs-5'>Skincare</p>
            </div>

            <Container fluid className='d-flex justify-content-end gap-4 mb-4 p-0'>
                <Form.Label className='d-flex gap-3 align-items-center'>
                    <p className='fw-light fs-5 m-0'>0</p>
                    <Form.Range />
                    <p className='fw-light fs-5 m-0'>1000</p>
                </Form.Label>

                <Form.Select aria-label="Default select example" className='w-25 fw-light fs-5'>
                    <option>Categoría</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className='w-25 fw-light fs-5'>
                    <option>Subcategoría</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Container>

            <Row className="justify-content-center">
                <Col>
                    <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShow}>
                        <img src="/icons/filter.svg" alt="" />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-lg-none">Filtrar</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup>
                                <ListGroup.Item className='fs-5 fw-light'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Filtro product 1'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className='fs-5 fw-light'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Filtro product 2'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className='fs-5 fw-light'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Filtro product 3'
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item className='fs-5 fw-light'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Filtro product 4'
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
                <Col lg={10}>
                    <Row>
                        {productoFiltradoRef.current.slice(0, cardsToShow).map((producto) => (
                            <Col className='d-flex px-2 mb-4' xs={12} sm={6} md={4} lg={3} key={producto.id}>
                                <CardFav
                                    id={producto.id}
                                    name={producto.name}
                                    price={producto.price}
                                    stars={producto.rating}
                                    img={producto.api_featured_image}
                                    stock={producto.stock}
                                    colors={producto.product_colors}
                                    type={producto.product_type}
                                />
                            </Col>
                        ))}
                    </Row>
                    {loadMore && (
                        <div className="text-center mt-4">
                            <Button className='fw-light fs-4 mb-5' variant="outline-primary" onClick={handleLoadMore}>
                                Mostrar más
                            </Button>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default All;
