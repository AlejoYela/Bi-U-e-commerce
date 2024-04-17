import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Placeholder, Card } from 'react-bootstrap';
import axios from 'axios';
import CardFav from './CardFav';
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';
import { useFilters } from '../hooks/useFilters';

function All() {
    const [producto, setProducto] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(12);
    const [loading, setLoading] = useState(true);

    const {filteredProducts} = useFilters()

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
    

    const handleLoadMore = () => {
        setCardsToShow(prevCards => prevCards + 12);
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

                <FilterPrice loading={loading}/>

                <Row className="justify-content-center">
                    <Col>

                        <FilterCategory productos={producto} loading={loading} />

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
                                            product={producto}
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