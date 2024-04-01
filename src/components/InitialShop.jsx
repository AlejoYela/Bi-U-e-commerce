import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function InitialShop() {
    return (
        <div className="image-container">
            <Image src="Makeup-image.png" fluid className="imagen" />
            <div className="text-overlay text-primary bg-light bg-opacity-75 rounded-4">
                <h1 className='fw-light opacity-100'>Descubre tu Belleza Auténtica</h1>
                <p className='fw-light'>Explora Nuestra Colección de Maquillaje y Cuidado de la Piel</p>
                <Button variant="primary" className="d-lg-inline-block fw-bold" size="lg">Ver catálogo completo</Button>
            </div>
        </div>
    );
}

export default InitialShop;
