import React from 'react';
import { Container } from 'react-bootstrap';
import { LeafIcon, PawIcon, RecyclableIcon, FlaskOffIcon } from '../icons/Icons';

function VeganSection() {
    return (
        <Container fluid className='d-flex flex-wrap gap-5 text-center justify-content-center my-5'>
            <div>
                <LeafIcon size={50} />
                <p>Vegano</p>
            </div>
            <div>
                <PawIcon size={50} />
                <p>Sin crueldad animal</p>
            </div>
            <div>
                <RecyclableIcon size={50} />
                <p>Reciclable</p>
            </div>
            <div>
                <FlaskOffIcon size={50} />
                <p>Sin parabenos</p>
            </div>
        </Container>
    );
}

export default VeganSection;
