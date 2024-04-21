import React from 'react';
import { Container } from 'react-bootstrap'
import { LeafIcon, PawIcon, RecyclableIcon, FlaskOffIcon } from '../icons/Icons';

function VeganSection() {
    return (

        <Container fluid className='d-flex flex-wrap gap-3 text-center justify-content-center my-5'>

            <LeafIcon size={50} />
            <FlaskOffIcon size={50} />
            <PawIcon size={50} />
            <RecyclableIcon size={50} />

        </Container>
    );
}

export default VeganSection;
