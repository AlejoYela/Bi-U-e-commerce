import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function Variantes({ colors }) {
    // Verifica si existen colores y si hay al menos uno con un nombre definido
    const showColorName = colors && colors.length > 0 && colors.some(variante => variante.nombre !== null);

    // Lógica para determinar el nombre inicial del tono
    const inicial = showColorName ? colors[0].nombre : '';

    const [selectedVariant, setSelectedVariant] = useState(inicial);

    const handleVariant = (nombre) => {
        setSelectedVariant(nombre);
    }

    return (
        <Container className='p-0'>
            {showColorName &&
                <small style={{ fontSize: '0.7rem' }} className='fw-bolder text-uppercase text-body-tertiary'>COLOR: {selectedVariant}</small>}
            <Container fluid className='d-flex flex-wrap justify-content-start gap-2 mb-4 p-0'>
                {colors && colors.map((variante, index) => (
                    <Button 
                        key={index} 
                        className={`rounded-pill p-1 ${selectedVariant === variante.nombre ? 'selected' : ''}`} 
                        style={{ 
                            backgroundColor: variante.hex, 
                            height: '1rem', 
                            width: '1rem',
                            border: selectedVariant === variante.nombre ? '1.5px solid black' : 'none', // Agrega borde negro cuando seleccionado
                        }} 
                        onClick={() => handleVariant(variante.nombre)}
                    ></Button>
                ))}
            </Container>
        </Container>
    );
}

export default Variantes;
