import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div style={{ maxWidth: '100%', overflow: 'hidden' }} className='bg-secondary py-5 px-2'>
            <Container className='d-flex justify-content-center position-relative gap-5'>
                {[1, 2, 3, 4].map((imagen => (
                    <Image className='rounded' src={`images/faces/${imagen}.png`} alt="" />
                )))}

                
                    <Container className='position-absolute bottom-0 end-0  bg-light bg-opacity-50 rounded-3 p-0 w-75'>
                        <div className='bg-light bg-opacity-50 mb-3 rounded-3'>
                            <h2 className='text-end m-0 p-4 fw-light fs-1'>Tienda de Maquillaje y Skincare</h2>
                        </div>
                        <div className='d-flex justify-content-end m-3'>
                            <Link to='/productos'>
                                <Button className='fs-4 fw-light' variant='outline-primary'>Ver catálogo completo</Button>
                            </Link>
                        </div>
                    </Container>
                

            </Container>
        </div>
    );
}

export default Hero;
