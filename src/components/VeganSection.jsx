import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap'

function VeganSection() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center gap-3">
                <Col md={1} className='text-center mx-5 p-0'>
                    <Image src="icons/14.svg" alt="" style={{ width: '5rem' }} className='mb-2'/>
                    <p className='fs-4 mb-0'>Vegano</p>
                </Col>
                <Col md={1} className='text-center mx-5 p-0'>
                    <Image src="icons/15.svg" alt="" style={{ width: '5rem' }} className='mb-2'/>
                    <p className='fs-4 mb-0'>Sin parabenos</p>
                </Col>
                <Col md={1} className='text-center mx-5 p-0'>
                    <Image src="icons/16.svg" alt="" style={{ width: '5rem' }} className='mb-2'/>
                    <p className='fs-4 mb-0'>Sin crueldad animal</p>
                </Col>
                <Col md={1} className='text-center mx-5 p-0'>
                    <Image src="icons/17.svg" alt="" style={{ width: '5rem' }} className='mb-2'/>
                    <p className='fs-4 mb-0'>Reciclable</p>
                </Col>
            </Row>
        </Container>
    );
}

export default VeganSection;
