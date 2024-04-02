import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function InitialShop() {
    return (
        <div className="image-container">
            <Image src="12.png" fluid className="imagen" />
            <div className="text-overlay text-primary bg-light bg-opacity-75 rounded-5">
                <h1 className='fw-light'>Descubre tu Belleza Auténtica</h1>
                <p className='fw-medium'>Explora Nuestra Colección de Maquillaje y Cuidado de la Piel</p>
                <Button variant="secondary" className="d-lg-inline-block border-primary" size="lg">Ver catálogo completo</Button>
            </div>
        </div>
    );
}

export default InitialShop;
