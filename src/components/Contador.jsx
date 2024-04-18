import React, { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap'

function Contador() {
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

    const addToCart = () => {
        // Aquí puedes agregar la lógica para añadir el producto al carrito de compras
    }

    return (
        <Container className='d-flex gap-3 p-0'>
            <ButtonGroup className='border border-1 border-primary w-auto'>
                <Button
                    className='fs-4 fw-light border-0'
                    variant='outline-primary'
                    onClick={disminuirCantidad}
                    aria-label="Disminuir cantidad"
                >
                    -
                </Button>
                <Button
                    className='fw-normal border-0'
                    variant='outline-primary'
                    aria-label="Cantidad actual"
                >
                    {cantidad}
                </Button>
                <Button
                    className='fs-4 fw-light border-0'
                    variant='outline-primary'
                    onClick={aumentarCantidad}
                    aria-label="Aumentar cantidad"
                >
                    +
                </Button>
            </ButtonGroup>
            <Button
                variant="outline-primary"
                size='lg'
                className='fw-light border-1'
                onClick={addToCart}
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
