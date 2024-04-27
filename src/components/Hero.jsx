import React from 'react'
import { Image, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFilters } from '../hooks/useFilters'

function Hero () {
  const { selectCategory, selectSubcategory } = useFilters()
  return (
    <>
      <Carousel indicators={false} controls={false} fade>
        <Carousel.Item className='position-relative' interval={5000}>
          <Image fluid src='images/faces/gif-eye.gif' className='w-100' />
          <div className='position-absolute bottom-0 start-0 m-0 m-md-5 p-3 p-md-4'>

            <h2 className='fs-3 m-0 text-light d-none d-md-block'>Resalta tu belleza con estilo</h2>
            <p className='fs-5 fw-light text-light'>Descubre Nuestra Colección de Maquillaje</p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/productos'>
                <Button variant='light z-3 text-truncate' onClick={() => { selectCategory('all'); selectSubcategory('all') }}>Ver catálogo completo</Button>
              </Link>
              <Link to='/productos'>
                <Button variant='outline-light z-3 text-truncate' onClick={() => { selectCategory('Maquillaje'); selectSubcategory('all') }}>Ver maquillaje</Button>
              </Link>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item className='position-relative' interval={5000}>
          <Image fluid src='images/faces/gif-skincare.gif' className='w-100' />
          <div className='position-absolute bottom-0 start-0 m-0 m-md-5 p-3 p-md-4'>

            <h2 className=' fs-3 m-0 d-none d-md-block'>Descubre tu belleza auténtica</h2>
            <p className=' fs-5 fw-light'>Explora Nuestra Colección de Skincare</p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/productos'>
                <Button variant='dark z-3 text-truncate' onClick={() => { selectCategory('all'); selectSubcategory('all') }}>Ver catálogo completo</Button>
              </Link>
              <Link to='/productos'>
                <Button variant='outline-dark z-3 text-truncate' name='Skincare' onClick={() => { selectCategory('Skincare'); selectSubcategory('all') }}>Ver catálogo de skincare</Button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Hero
