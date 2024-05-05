import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Variantes from '../components/Variantes'
import { Image, Col, Row, Container, Accordion, Button, ButtonGroup } from 'react-bootstrap'
import { useFav } from '../hooks/useFav'
import { StarIcon, CartIcon, MailboxIcon, CheckIcon, DropletIcon, FavIcon, FavFillIcon } from '../icons/Icons'
import MultiToast from '../components/MultiToast'
import AddToCartButton from '../components/AddToCartButton'

function Producto () {
  const { fav, addToFav, removeFromFav } = useFav()

  const { id } = useParams()
  const [producto, setProducto] = useState([])
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    axios(`http://localhost:4321/productos/${id}`)
      .then(({ data }) => {
        setProducto(data)
        console.log(producto.src)
      })
      .catch((error) => {
        console.error(error)
      }).finally(() => {

      })
  }, [producto])

  const checkProductInFav = product => {
    return fav.some(item => item.id === product.id)
  }

  const isProductInFav = checkProductInFav(producto)

  return (
    <Container className='px-5'>
      <Row className='gap-1 p-3'>

        <Col className='d-flex h-75 w-50 mb-5 mb-md-0' xs={12} sm={12} md={12} lg={5} xl={5}>
          <Image src={producto.src} className='shadow w-100' rounded />
        </Col>

        <Col>
          <Container>
            <h2 className='fs-4 fw-normal text-uppercase m-0'>{producto.nombre}</h2>
            <small className='text-body-tertiary'>Colección: {producto.coleccion}</small><br />

            {producto.calificacion &&
              <div className='d-inline-flex my-3 gap-1'>
                <StarIcon />
                {producto.calificacion}
              </div>}
            <p className='fs-4 fw-light'>$ {producto.precio}</p>

            <p className='fw-light mt-3'>{producto.descripcion}</p>
            <Variantes colors={producto.colores} />

            <ButtonGroup>
              <AddToCartButton product={producto} />
              <Button
                variant='outline-primary d-inline-flex gap-1'
                className='fw-light'
                onClick={() => {
                  if (isProductInFav) {
                    removeFromFav(producto)
                  } else {
                    addToFav(producto)
                    // Aquí puedes mostrar un toast o mensaje para confirmar que se ha agregado a favoritos
                  }
                }}
              >
                {isProductInFav
                  ? (
                    <>
                      <FavFillIcon size={20} strokeWidth={1} color='#000000' />
                      Quitar de favoritos
                    </>
                    )
                  : (
                    <>
                      <FavIcon size={20} strokeWidth={1} color='#000000' />
                      Añadir a favoritos
                    </>
                    )}
              </Button>

            </ButtonGroup>

            <MultiToast titulo='¡Agregado!' texto='Clickea en el ícono de bolsa para ver todos los productos que has agregado.' icono={<CartIcon size={20} />} showToast={showToast} setShowToast={setShowToast} />

            <Accordion flush className='my-4'>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  <p className='m-0 p-0 fs-5 fw-light d-inline-flex gap-2'>
                    <CheckIcon size={20} color='#000000' strokeWidth={1} />Características y beneficios
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className='d-flex gap-5 p-0 m-0 justify-content-evenly'>
                    {producto.tag_list && producto.tag_list.map((tag, index) => {
                      return (
                        <li key={index} className='m-0 p-0 fw-light'>
                          {tag}
                        </li>
                      )
                    })}

                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>
                  <p className='m-0 p-0 fs-5 fw-light d-inline-flex gap-2'>
                    <DropletIcon size={20} color='#000000' strokeWidth={1} />¿Cómo se usa?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className='fw-light m-0'>
                    {producto.uso}
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='4'>
                <Accordion.Header>
                  <p className='m-0 p-0 fs-5 fw-light d-inline-flex gap-2'>
                    <MailboxIcon size={20} color='#000000' strokeWidth={1} />Envío
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className='fw-light d-inline-flex'>
                    ¡Tu ubicación tiene habilitado el envío gratis!
                  </p>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Producto
