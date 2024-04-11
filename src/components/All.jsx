import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import CardFav from './CardFav';

function All() {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        axios(`http://makeup-api.herokuapp.com/api/v1/products.json`)
            .then(({ data }) => {
                setProducto(data);
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {

            });
    }, []);

    return (
        <Container>
            {producto.map(producto => {
                <CardFav id={producto.id} name={producto.name} price={producto.price} stars={producto.rating} img={producto.api_featured_image} stock={producto.stock} colors={producto.product_colors} type={producto.product_type} />
            })}
        </Container>
    );
}

export default All;