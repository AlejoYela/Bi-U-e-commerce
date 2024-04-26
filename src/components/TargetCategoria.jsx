import React from 'react'
import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TargetCategoria ({ title, src, selectSubcategory, setShow }) {
  return (
    <Row className='mb-3'>
      <Link to='/productos' className='position-relative' onClick={() => { selectSubcategory(title); setShow(false) }}>
        <p className='position-absolute top-50 start-50 translate-middle fw-normal fs-5 text-center'>{title}</p>
        <Image src={src} fluid width='100%' className='opacity-50 rounded' />
      </Link>
    </Row>
  )
}

export default TargetCategoria
