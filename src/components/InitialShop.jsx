import React from 'react';
import { Image, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function InitialShop() {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <Image src="promos/1.png" fluid className="w-100" />
                <div className="text-overlay text-primary bg-light bg-opacity-75 rounded-5">
                    <img
                        alt=""
                        src="icons/logo.svg"
                        className=""
                        width={'10svw'}
                    />

                    <h2 className='fw-light mb-3'>Tienda de Maquillaje y Skincare</h2>
                    <Link to='/productos'>
                        <Button variant="outline-primary" className="d-lg-inline-block fw-light" size="lg">Ver catálogo completo</Button>
                    </Link>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="promos/2.png" fluid className="imagen" />
                <div className="text-overlay text-primary bg-light bg-opacity-75 rounded-5">
                    <h1 className='fw-light'>Descubre tu Belleza Auténtica</h1>
                    <p className='fw-light'>Explora Nuestra Colección de Cuidado de la Piel</p>
                    <Button variant="outline-primary" className="d-lg-inline-block fw-light" size="lg">Ver catálogo de Skincare</Button>
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default InitialShop;
