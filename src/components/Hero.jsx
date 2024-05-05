import React from 'react'
import { Image, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFilters } from '../hooks/useFilters'
import { SparklesIcon } from '../icons/Icons'

function Hero () {
  const { selectCategory, selectSubcategory } = useFilters()
  return (
    <div>
      <Carousel indicators={false} controls={false} fade>
        <Carousel.Item className='position-relative' interval={5000}>
          <Image fluid src='images/faces/gif-eye.gif' className='w-100 object-fit-cover' style={{ height: '75vh' }} />
          <div className='position-absolute bottom-0 start-0 m-0 m-md-5 p-3 p-md-4'>

            <h2 className='fs-3 m-0 text-light d-none d-md-block fw-light'>Resalta tu belleza con estilo con nuestra</h2>
            <p className='d-none d-md-block fs-1 text-uppercase fw-light text-light fw-normal'>Colección de Maquillaje</p>
            <p className='d-block d-md-none display-2 text-uppercase fw- text-light fw-normal'>Colección de Maquillaje</p>
            <div className='d-grid d-md-flex align-items-center gap-2'>
              <Link to='/productos'>
                <Button className='w-100' size='lg' variant='light z-3 text-truncate' onClick={() => { selectCategory('all'); selectSubcategory('all') }}>Ver catálogo completo <SparklesIcon color='#000000' size={23} /></Button>
              </Link>
              <Link to='/productos'>
                <Button className='w-100' size='lg' variant='outline-light z-3 text-truncate' onClick={() => { selectCategory('Maquillaje'); selectSubcategory('all') }}>Ver catálogo de maquillaje</Button>
              </Link>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item className='position-relative' interval={5000}>
          <Image fluid src='images/faces/gif-skincare.gif' className='w-100 object-fit-cover' style={{ height: '75vh' }} />
          <div className='position-absolute bottom-0 start-0 m-0 m-md-5 p-3 p-md-4'>

            <h2 className='fs-3 m-0 d-none d-md-block fw-light'>Descubre tu belleza auténtica con nuestra</h2>
            <p className='d-none d-md-block fs-1 text-uppercase fw-normal'>Colección de Skincare</p>
            <p className='d-block d-md-none display-2 text-uppercase fw-normal'>Colección de Skincare</p>
            <div className='d-grid d-md-flex align-items-center gap-2'>
              <Link to='/productos'>
                <Button className='w-100' size='lg' variant='dark z-3 text-truncate' onClick={() => { selectCategory('all'); selectSubcategory('all') }}>Ver catálogo completo <SparklesIcon color='#e5a553' size={23} /></Button>
              </Link>
              <Link to='/productos'>
                <Button className='w-100' size='lg' variant='outline-dark z-3 text-truncate' name='Skincare' onClick={() => { selectCategory('Skincare'); selectSubcategory('all') }}>Ver catálogo de skincare</Button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero
