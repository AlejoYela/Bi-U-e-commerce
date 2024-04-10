import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function Variantes({ colors }) {
    // Verifica si existen colores y si hay al menos uno con un nombre definido
    const showColorName = colors && colors.length > 0 && colors.some(variante => variante.colour_name !== null);

    // Lógica para determinar el nombre inicial del tono
    const inicial = showColorName ? colors[0].colour_name : '';

    const [selectedVariant, setSelectedVariant] = useState(inicial);

    const handleVariant = (nombre) => {
        setSelectedVariant(nombre);
    }

    return (
        <Container className='p-0'>
            {showColorName &&
                <small style={{ fontSize: '0.6rem' }} className='fw-bolder text-uppercase'>{selectedVariant}</small>}
            <Container fluid className='d-flex justify-content-start gap-1 mb-2 p-0'>
                {/* Mapear los colores y crear botones */}
                {colors && colors.map((variante, index) => (
                    <Button key={index} className='rounded-pill border-0' style={{ backgroundColor: variante.hex_value, height: '1.5svw', width: '1.5svw' }} onClick={() => handleVariant(variante.colour_name)}></Button>
                ))}
            </Container>
        </Container>
    );
}

export default Variantes;
