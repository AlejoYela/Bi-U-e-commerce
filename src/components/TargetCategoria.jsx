import React from 'react';
import { Row, Image } from 'react-bootstrap'

function TargetCategoria({ title, src }) {
    return (
        <Row className='mb-3'>
            <div className='position-relative'>
                <p className='position-absolute top-50 start-50 translate-middle fw-normal fs-1'>{title}</p>
                <Image src={src} fluid width={'100%'} className='opacity-50 rounded' />
            </div>
        </Row>);
}

export default TargetCategoria;