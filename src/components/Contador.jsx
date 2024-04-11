import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'

function Contador() {

    const [cantidad, setCantidad] = useState(0)
    const [hover, setHover] = useState(false);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1)
    }

    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <ButtonToolbar className='justify-content-between gap-1'>
            <ButtonGroup className='border border-1 border-primary w-auto'>
                <Button variant='secondary bg-transparent border-0' onClick={disminuirCantidad}>-</Button>
                <Button variant='secondary bg-transparent border-0 px-4'>{cantidad}</Button>
                <Button variant='secondary bg-transparent border-0' onClick={aumentarCantidad}>+</Button>
            </ButtonGroup>
            <ButtonGroup className='w-75'>
                <Button onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)} variant="outline-primary" size='lg' className='fw-light border-1'><a href="#" className='d-inline-block align-text-bottom'>
                        <img src={hover ? '/icons/cart-white.svg' : '/icons/cart.svg'} alt="Buscar" width={20} />
                    </a>
                    {' '} Añadir a la bolsa</Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default Contador;