import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Offcanvas, Form, ListGroup, Placeholder, Card } from 'react-bootstrap';
import axios from 'axios';
import CardFav from './CardFav';

function All() {
    const [producto, setProducto] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(12);
    const [loadMore, setLoadMore] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [precioMin, setPrecioMin] = useState(0);
    const [precioMax, setPrecioMax] = useState(500000);
    const [loading, setLoading] = useState(true);

    const handleCloseFilter = () => setShowFilter(false);
    const handleShowFilter = () => setShowFilter(true);

    const handleCloseOrder = () => setShowOrder(false);
    const handleShowOrder = () => setShowOrder(true);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
            .then(({ data }) => {
                setProducto(data);
                setLoading(false)
                setLoadMore(true)
            })
            .catch((error) => {
                console.error(error);
                setLoading(true)
                setLoadMore(false)
            });
    }, []);

    const handleLoadMore = () => {
        setCardsToShow(prevCards => prevCards + 12);
    };

    const handlePrecioMinChange = (event) => {
        const value = parseInt(event.target.value);
        setPrecioMin(value);
    };

    const handlePrecioMaxChange = (event) => {
        const value = parseInt(event.target.value);
        setPrecioMax(value);
    };

    return (
        <>
            <Container fluid='md'>
                <h2 className='text-center my-5 text-uppercase fw-light fs-3'>Todos los productos</h2>





                <div className='d-flex gap-3 text-center justify-content-center mb-4 bg-secondary py-2 px-0'>
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
                <Form className="d-flex mb-5">
                    <Form.Control
                        type="search"
                        placeholder="Escribe el producto o categoría a buscar"
                        className="me-2 fs-5 fw-light border-primary bg-transparent text-start"
                        aria-label="Buscar"
                    />
                    <Button
                        className="boton bg-transparent"
                        variant="outline-primary border-1"
                        aria-label="Buscar"
                    >
                        <img src='icons/search-vine.svg' alt="Buscar" />
                    </Button>
                </Form>
                <div className='d-flex gap-4'>
                    <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowFilter}>
                        <img src="/icons/filter.svg" alt="Filtrar" />
                    </Button>

                    <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowOrder}>
                        <img src="/icons/order.svg" alt="Filtrar" />
                    </Button>
                </div>

                <Offcanvas show={showOrder} responsive="lg" onHide={handleCloseOrder}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Ordenar por:</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Container className={showOrder ? 'd-grid gap-4 mb-4 align-items-center px-0' : 'd-flex justify-content-end gap-4 mb-4 align-items-center px-0'}>
                            <div className='fw-normal fs-5 d-none d-xl-block d-lg-block d-xl-block'>
                                <img
                                    alt=""
                                    src="icons/order.svg"
                                    width="40"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                                Ordenar por:
                            </div>


                            <h3 className='fw-light fs-5 m-0 align-middle'>Precio:</h3>

                            <Form.Control type="number" value={precioMin} onChange={handlePrecioMinChange} className='w-auto fw-light fs-5' />
                            <span className="fw-light fs-5 m-0">-</span>
                            <Form.Control type="number" value={precioMax} onChange={handlePrecioMaxChange} className='w-auto fw-light fs-5' />

                            <vr />

                            <Form.Select aria-label="Default select example" className={showOrder ? 'w-100 fw-light fs-5' : 'w-25 fw-light fs-5'}>

                                <option className='fw-light' value="1">Más vendidos</option>
                                <option className='fw-light' value="2">Características</option>
                                <option className='fw-light' value="3">Alfabéticamente: A-Z</option>
                                <option className='fw-light' value="4">Alfabéticamente: Z-A</option>
                                <option className='fw-light' value="5">Precio: menor a mayor</option>
                                <option className='fw-light' value="6">Precio: mayor a menor</option>
                                <option className='fw-light' value="7">Fecha: antiguo a reciente</option>
                                <option className='fw-light' value="8">Fecha: reciente a antiguo</option>
                            </Form.Select>

                        </Container>

                        {showOrder && <Button variant='outline-primary' className='fw-light fs-4' onClick={handleCloseOrder}>Aplicar</Button>}

                    </Offcanvas.Body>

                </Offcanvas>

                <Row className="justify-content-center">
                    <Col>
                        <div className=' mb-3 fw-normal fs-5 d-none d-xl-block d-lg-block d-xl-block'>
                            <img
                                alt=""
                                src="icons/filter.svg"
                                width="40"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            Filtrar por:

                        </div>



                        <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive="lg">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title className="d-lg-none">Filtrar productos:</Offcanvas.Title>

                            </Offcanvas.Header>

                            <Offcanvas.Body className='d-grid'>

                                <ListGroup className='mb-4'>
                                    <h4 className='fw-light fs-5'>Categorías</h4>
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

                                <ListGroup>
                                    <h4 className='fw-light fs-5'>Subcategorías</h4>
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

                        {loading && <Row className="d-flex justify-content-center">
                            {[1, 2, 3, 4].map((index) => (
                                <Col className='d-flex px-2 mb-4' xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Card style={{ width: '28rem' }}>
                                        <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src={`images/holders/${index}.png`} />
                                        <Card.Body>
                                            <Placeholder as={Card.Title} animation="glow">
                                                <Placeholder xs={6} />
                                            </Placeholder>
                                            <Placeholder as={Card.Text} animation="glow">
                                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                <Placeholder xs={6} /> <Placeholder xs={8} />
                                            </Placeholder>
                                            <Placeholder.Button variant="primary" xs={6} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>}
                        <Row>
                            {producto
                                .filter(producto => (producto.price * 3770) >= precioMin && (producto.price * 3770) <= precioMax)
                                .slice(0, cardsToShow)
                                .map((producto) => (
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
        </>
    );
}

export default All;