import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function Variantes({ colors }) {
    const initialVariant = colors?.[0]?.colour_name || 'Ninguno';
    const [selectedVariant, setSelectedVariant] = useState(initialVariant);

    const handleVariant = (nombre) => {
        setSelectedVariant(nombre);
    }

    return (
        <>
            {selectedVariant !== 'Ninguno' && (
                <small style={{ fontSize: '0.6rem' }} className='fw-bolder text-uppercase'>{'Tono : ' + selectedVariant}</small>
            )}
            <Container fluid className='d-flex justify-content-start gap-1 mb-2 p-0'>
                {colors?.map((variante, index) => (
                    <Button
                        key={index}
                        className='rounded-pill border-0'
                        style={{ backgroundColor: variante.hex_value, height: '1.5svw', width: '1.5svw' }}
                        onClick={() => handleVariant(variante.colour_name)}
                    ></Button>
                ))}
            </Container>
        </>
    );
}

export default Variantes;
