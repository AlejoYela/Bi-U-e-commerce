import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Variantes from './Variantes';
import { Image, Col, Row, Container, Badge, Accordion } from 'react-bootstrap'
import Contador from './Contador';

function Producto() {

    let productoFiltrado = {};
    const { product_type, id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        axios(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`)
            .then(({ data }) => {
                productoFiltrado = data.find(item => item.id == id);
                setProducto(productoFiltrado);
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {

            });
    }, []);

    const pesosConversion = `${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'COP' }).format((producto.price * 3770))}`;

    return (
        <Container>
            <Row className='gap-5 p-5'>
                <Col><Image src={producto.api_featured_image} className='w-100 border border-1 border-primary' rounded /></Col>
                <Col >
                    <Container>
                        <h2 className='fs-4 fw-normal text-uppercase mb-3'>{producto.name}</h2>
                        <p className='fs-4 text-primary'>
                            <Badge bg="secondary" text='primary' className='fw-normal'>
                                <img alt="" src="/icons/star.svg" width="17" height="17" className="d-inline-block align-top" /> {producto.rating ? producto.rating : "Sin calificaciones"}
                            </Badge>
                        </p>
                        <p className='fs-4 fw-light'>{pesosConversion}</p>

                        <Variantes colors={producto.product_colors} />

                        <Contador />

                        <Accordion flush className='my-3' >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <p className='m-0 p-0 fs-5 fw-light'>
                                        Descripción
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='fw-light fs-5 m-0'>{producto.description}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><p className='m-0 p-0 fs-5 fw-light'>
                                    Características y beneficios
                                </p></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fw-light fs-5 m-0'>
                                        Hola soy un texto de acordeón
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><p className='m-0 p-0 fs-5 fw-light'>
                                    ¿Cómo se usa?
                                </p></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fw-light fs-5 m-0'>
                                        Hola soy un texto de acordeón
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><p className='m-0 p-0 fs-5 fw-light'>
                                    Ingredientes
                                </p></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fw-light fs-5 m-0'>
                                        Hola soy un texto de acordeón
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><p className='m-0 p-0 fs-5 fw-light'>
                                    Envío
                                </p></Accordion.Header>
                                <Accordion.Body>
                                    <p className='fw-light fs-5'>
                                        Hola soy un texto de acordeón
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <ul className='d-flex gap-5 p-0'>
                            {producto.tag_list && producto.tag_list.map(tag => {
                                return (<li>
                                    {tag}
                                </li>)
                            })}
                        </ul>

                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Producto;