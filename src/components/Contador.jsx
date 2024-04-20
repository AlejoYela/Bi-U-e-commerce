import React, { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { useCart } from '../hooks/useCart';

function Contador({ product }) {
    const [cantidad, setCantidad] = useState(0);
    const [hover, setHover] = useState(false);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    }

    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }


    const { addToCart } = useCart()

    return (
        <Container className='d-flex gap-3 p-0'>

            <Button
                variant="outline-primary"
                size='lg'
                className='fw-light border-1'
                onClick={() => {
                    addToCart(product)
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img
                    src='/icons/cart.svg'
                    alt="Añadir a la bolsa"
                    width={20}
                    className='d-inline-block align-text-bottom'
                />
                {' '}
                Añadir a la bolsa
            </Button>
        </Container>
    );
}

export default Contador;
