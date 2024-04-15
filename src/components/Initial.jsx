import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Initial() {

    return (
        <div style={{ maxWidth: '100%', overflow: 'hidden' }} className='bg-secondary p-5'>
            <Container className='d-flex justify-content-center position-relative gap-5'>
                {[1, 2, 3, 4].map((imagen => (
                    <Image className='rounded' src={`images/faces/${imagen}.png`} alt="" />
                )))}

                
                    <Container className='position-absolute top-50 start-50 translate-middle bg-light bg-opacity-50 rounded-3 p-0 w-75'>
                        <div className='bg-light bg-opacity-50 mb-3 rounded-3'>
                            <h2 className='text-center m-0 p-4 fw-light fs-1'>Tienda de Maquillaje y Skincare</h2>
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

export default Initial;
