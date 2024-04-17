import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap'

function VeganSection() {
    return (

        <Container fluid  className='d-flex flex-wrap gap-3 text-center justify-content-center my-5'>

            <a href='#' title='Vegano'>
                <Image src="icons/14.svg" alt="" className='mb-2' width='80svw' />
               
            </a>
            <a href='#' title='Sin parabenos'>
                <Image src="icons/15.svg" alt="" className='mb-2' width='80svw' />
             
            </a>
            <a href='#' title='Libre de crueldad animal'>
                <Image src="icons/16.svg" alt="" className='mb-2' width='80svw' />
                
            </a>
            <a href='#' title='Reciclable'>
                <Image src="icons/17.svg" alt="" className='mb-2' width='80svw' />
               
            </a>

        </Container>
    );
}

export default VeganSection;
