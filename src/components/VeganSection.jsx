import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap'

function VeganSection() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center gap-1">
                <Col md={2} className='text-center mx-5'>
                    <Image src="icons/14.svg" alt="" style={{ width: '8svw' }} />
                    <p className='fs-5 '>Vegano</p>
                </Col>
                <Col md={2} className='text-center mx-5'>
                    <Image src="icons/15.svg" alt="" style={{ width: '8svw' }} />
                    <p className='fs-5 '>Sin parabenos</p>
                </Col>
                <Col md={2} className='text-center mx-5'>
                    <Image src="icons/16.svg" alt="" style={{ width: '8svw' }} />
                    <p className='fs-5 '>Sin crueldad animal</p>
                </Col>
                <Col md={2} className='text-center mx-5'>
                    <Image src="icons/17.svg" alt="" style={{ width: '8svw' }} />
                    <p className='fs-5 '>Reciclable</p>
                </Col>
            </Row>
        </Container>
    );
}

export default VeganSection;
