import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Variantes from './Variantes';
import { Image, Col, Row, Container, Badge } from 'react-bootstrap'

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

    return (
        <Container>
            <Row className='gap-5 p-5'>
                <Col><Image fluid src={producto.api_featured_image} className='w-100' /></Col>
                <Col className='position-relative'>
                    <Container className='position-absolute top-50 start-50 translate-middle'>
                        <h2>{producto.name}</h2>
                        <p>{producto.brand}</p>

                        <p className='fs-4 text-primary'>
                            <Badge bg="secondary" text='primary' className='fw-normal'>
                                <img alt="" src="/icons/star.svg" width="17" height="17" className="d-inline-block align-top" /> {producto.rating ? producto.rating : "Sin calificaciones"}
                            </Badge>
                        </p>

                        {true ?

                            <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="/icons/check.svg" alt="" /> Producto disponible</p> :

                            <p style={{ fontSize: '0.9rem' }} className=' d-inline-block text-danger fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="/icons/alert.svg" alt="" /> Producto agotado</p>}

                        <p>{producto.price}</p>
                        <Variantes colors={producto.product_colors} />
                        <p>{producto.description}</p>

                        <ul>
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
