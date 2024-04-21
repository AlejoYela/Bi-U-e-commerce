import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Variantes from '../components/Variantes';
import { Image, Col, Row, Container, Accordion, Button } from 'react-bootstrap'
import { useCart } from '../hooks/useCart';
import { StarIcon, CheckCartIcon, AddToCartIcon } from '../icons/Icons';

function Producto() {

    const { cart, addToCart, removeFromCart } = useCart()

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

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    const isProductInCart = checkProductInCart(producto)

    return (
        <Container className='px-5'>
            <Row className='gap-1 p-3'>
                <Col className='d-flex justify-content-center h-75 w-50' xs={12} sm={12} md={12} lg={5} xl={5}><Image src={producto.api_featured_image} className='border w-100' rounded /></Col>
                <Col >
                    <Container>
                        <h2 className='fs-4 fw-normal text-uppercase mb-3'>{producto.name}</h2>

                        {producto.rating &&
                            <div className='d-flex mb-3 '>
                                <StarIcon />
                                {producto.rating}
                            </div>
                        }
                        <p className='fs-4 fw-light'>$ {producto.price}</p>


                        <p className='fw-light mt-3'>{producto.description}</p>
                        <Variantes colors={producto.product_colors} />
                        <Button
                            variant='outline-primary'
                            size='lg'
                            className='fw-light'
                            onClick={isProductInCart
                                ? () => removeFromCart(producto)
                                : () => addToCart(producto)
                            }
                        >

                            {isProductInCart ? <CheckCartIcon size={25} strokeWidth={1} /> : <AddToCartIcon size={25} strokeWidth={1} />}
                            {isProductInCart ? ' Producto agregado' : ' Agregar a la bolsa'}
                        </Button>

                        <Accordion flush className='my-3' >
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><p className='m-0 p-0 fs-5 fw-light'>
                                    Características y beneficios
                                </p></Accordion.Header>
                                <Accordion.Body>
                                    <ul className='d-flex gap-5 p-0 m-0 '>
                                        {producto.tag_list && producto.tag_list.map(tag => {
                                            return (<li className='m-0 p-0 fs-5 fw-light'>
                                                {tag}
                                            </li>)
                                        })}
                                    </ul>
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


                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Producto;