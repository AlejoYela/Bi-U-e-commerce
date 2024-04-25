import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductoEstrella () {
  return (
    <div className='d-flex flex-column position-relative'>
      <Image src='images/specials/4.png' />
      <div className='position-absolute top-50 start-50 translate-middle-y w-25 ms-5 ps-5'>
        <h3 className='fs-4 fw-bold text-uppercase'>Nuevo Fijador Matizante</h3>
        <p className='lh-1 fw-light fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odit ipsam. Omnis nam possimus libero obcaecati modi non, explicabo mollitia quo ab, voluptas, eveniet sed inventore asperiores quasi beatae animi.</p>
        <Link to='/productos'>
          <Button className='fw-light mt-3' size='lg'>Agregar al carrito</Button>
        </Link>
      </div>
    </div>
  )
}

export default ProductoEstrella
