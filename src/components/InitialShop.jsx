import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function InitialShop() {
    return (
        <Carousel className='carrusel-inicio'>
            <Carousel.Item>
                <Image src="12.png" fluid className="imagen" />
                <div className="text-overlay text-primary bg-light bg-opacity-75 rounded-5">
                    <img
                        alt=""
                        src="logo.svg"
                        className=""
                    />
                    <p className='titulo fw-normal'>BiU Cosmetics</p>
                    <h2 className='fw-lighter mb-1'>Tienda de Maquillaje y Skincare</h2>
                    <Button variant="secondary" className="d-lg-inline-block border-primary fw-light" size="lg">Ver catálogo completo</Button>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="8.png" fluid className="imagen" />
                <div className="text-overlay text-primary bg-light bg-opacity-75 rounded-5">
                    <h1 className='fw-light'>Descubre tu Belleza Auténtica</h1>
                    <p className='fw-light'>Explora Nuestra Colección de Cuidado de la Piel</p>
                    <Button variant="secondary" className="d-lg-inline-block border-primary fw-light" size="lg">Ver catálogo de Skincare</Button>
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default InitialShop;
