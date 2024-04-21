import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Placeholder, Card } from 'react-bootstrap';
import axios from 'axios';
import CardFav from '../components/CardFav';
import FilterCategory from '../components/FilterCategory';
import FilterPrice from '../components/FilterPrice';
import { useFilters } from '../hooks/useFilters';

function All() {
    const [producto, setProducto] = useState([]);
    const [cardsToShow, setCardsToShow] = useState(12);
    const [loading, setLoading] = useState(true);


    const { filteredProducts } = useFilters()


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
        <Container fluid='md'>
            <h2 className='text-center my-5 text-uppercase fw-light fs-2'>Todos los productos</h2>

            <hr className='my-5' />

            <FilterPrice loading={loading} />

            <Row className="justify-content-center">
                <Col>

                    <FilterCategory productos={producto} loading={loading} />

                </Col>
                <Col lg={10}>

                    {loading && <Row className="d-flex justify-content-center">
                        {[1, 2, 3, 4].map((index) => (
                            <Col className='d-flex px-2 mb-4 justify-content-center' xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card style={{ width: '15rem' }}>
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
                                <Col className='d-flex px-1 mb-4 justify-content-center' xs={12} sm={6} md={4} lg={3} key={producto.id}>
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
    );
}

export default All;