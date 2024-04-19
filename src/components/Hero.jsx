import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className='w-100 position-relative'>
            <Image fluid src='images/faces/gif-eye.gif' className='w-100' />
            <Container fluid className='position-absolute bottom-0 start-0 m-5 w-50 p-3'>
                <h2 className='text-light fs-3 m-0'>Descubre tu belleza auténtica</h2>
                <p className='text-light fs-5 fw-light'>Accede a todos los productos de nuestro catálogo con la mejor calidad</p>
                <Link to='/productos'>
                    <Button variant='outline-light'>Ver catálogo completo</Button>
                </Link>
            </Container>
        </div>
    );
}

export default Hero;