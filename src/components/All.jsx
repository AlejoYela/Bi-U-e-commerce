import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Offcanvas, Form, Placeholder, Card } from 'react-bootstrap';
import axios from 'axios';
import CardFav from './CardFav';
import Filters from './Filters';

function All() {
    const [producto, setProducto] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(12);
    const [showOrder, setShowOrder] = useState(false);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
        maxPrice: 100
    });

    const filteredProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && product.price <= filters.maxPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            );
        });
    };

    const handleCloseOrder = () => setShowOrder(false);
    const handleShowOrder = () => setShowOrder(true);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
            .then(({ data }) => {
                setProducto(data);
                setLoading(false)
            })
            .catch((error) => {
                console.log('Error en importación de datos desde la API');
                console.error(error);
                setLoading(true)
            });
    }, []);

    const categories = []

    producto.forEach(element => {
        if (element.category && !categories.includes(element.category)) {
            categories.push(element.category);
        }
    });


    const handleLoadMore = () => {
        setCardsToShow(prevCards => prevCards + 12);
    };

    const handlePrecioMinChange = (event) => {
        const value = parseInt(event.target.value);
        setFilters({
            ...filters,
            minPrice: value
        })
    };

    const handlePrecioMaxChange = (event) => {
        const value = parseInt(event.target.value);
        setFilters({
            ...filters,
            maxPrice: value
        })
    };



    const filteredProduct = filteredProducts(producto)

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

                    <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowOrder}>
                        <img src="/icons/order.svg" alt="Filtrar" />
                    </Button>

                <Offcanvas show={showOrder} responsive="lg" onHide={handleCloseOrder}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Ordenar por:</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {!loading && <Container className={showOrder ? 'd-grid gap-4 mb-4 align-items-center px-0' : 'd-flex justify-content-end gap-4 mb-4 align-items-center px-0'}>


                            <h3 className='fw-light fs-5 m-0 align-middle'>Precio:</h3>

                            <Form.Control type="number" value={filters.minPrice} onChange={handlePrecioMinChange} className='w-auto fw-light fs-5' />
                            <span className="fw-light fs-5 m-0">-</span>
                            <Form.Control type="number" value={filters.maxPrice} onChange={handlePrecioMaxChange} className='w-auto fw-light fs-5' />

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

                        </Container>}

                        {showOrder && <Button variant='outline-primary' className='fw-light fs-4' onClick={handleCloseOrder}>Aplicar</Button>}

                    </Offcanvas.Body>

                </Offcanvas>

                <Row className="justify-content-center">
                    <Col>

                        <Filters productos={producto} filters={filters} setFilters={setFilters} />

                    </Col>
                    <Col lg={10}>

                        {loading && <Row className="d-flex justify-content-center">
                            {[1, 2, 3, 4].map((index) => (
                                <Col className='d-flex px-2 mb-4 justify-content-center' xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Card style={{ width: '18rem' }}>
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
                        <Row className="d-flex justify-content-center">
                            {filteredProduct
                                .slice(0, cardsToShow)
                                .map((producto) => (
                                    <Col className='d-flex px-2 mb-4 justify-content-center' xs={12} sm={6} md={4} lg={3} key={producto.id}>
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

                        <div className="text-center mt-4">
                            <Button className='fw-light fs-4 mb-5' variant="outline-primary" onClick={handleLoadMore}>
                                Mostrar más
                            </Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default All;