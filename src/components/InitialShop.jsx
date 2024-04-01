import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function InitialShop() {
    return (
        <div className="image-container">
            <Image src="Makeup-image.png" fluid className="blur-on-mobile" />
            <div className="text-overlay">
                <h1 className='fs-1 fw-bolder'>Descubre tu Belleza Auténtica</h1>
                <p className='fs-5'>Explora Nuestra Colección de Maquillaje y Cuidado de la Piel</p>
                <Button variant="outline-primary" className="d-lg-inline-block border-2 fw-bold">Ver catálogo completo</Button>
            </div>
        </div>
    );
}

export default InitialShop;
