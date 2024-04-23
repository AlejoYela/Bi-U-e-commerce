import React from 'react';
import { Image, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <>
            <Carousel indicators={false}>
                <Carousel.Item className='position-relative'>
                    <Image fluid src='images/faces/gif-eye.gif' className='w-100' />
                    <div className='position-absolute bottom-0 end-0 m-5 m-md-5 p-3 p-md-4'>

                        <h2 className='fs-3 m-0 text-light d-none d-md-block'>Resalta tu belleza con estilo</h2>
                        <p className='fs-5 fw-light d-none d-md-block text-light'>Descubre Nuestra Colección de Maquillaje</p>

                        <Link to='/productos'>
                            <Button variant='outline-light z-3'>Ver catálogo completo →</Button>
                        </Link>
                    </div>

                </Carousel.Item>
                <Carousel.Item className='position-relative'>
                    <Image fluid src='images/faces/gif-skincare.gif' className='w-100' />
                    <div className='position-absolute bottom-0 end-0 end-m-0 m-5 m-md-5 p-3 p-md-4'>

                        <h2 className=' fs-3 m-0 d-none d-md-block'>Descubre tu belleza auténtica</h2>
                        <p className=' fs-5 fw-light d-none d-md-block'>Explora Nuestra Colección de Cuidado de la Piel</p>
                        <Link to='/productos'>
                            <Button variant='outline-primary z-3'>Ver catálogo de skincare →</Button>
                        </Link>
                    </div>

                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Hero;