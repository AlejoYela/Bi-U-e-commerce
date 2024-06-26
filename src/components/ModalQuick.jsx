import React, { useState } from 'react'
import { Button, Modal, Image, Col, Row, CloseButton, Container } from 'react-bootstrap'
import Variantes from './Variantes'
import { Link } from 'react-router-dom'
import { useFav } from '../hooks/useFav'
import MultiToast from './MultiToast'
import { FavIcon, FavFillIcon, CartIcon, SearchIcon, CheckIcon, AlertIcon } from '../icons/Icons'
import AddToCartButton from './AddToCartButton'

function ModalQuick ({ product, state, setState }) {
  const [show, setShow] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { addToFav, removeFromFav, fav } = useFav()

  const checkProductInFav = product => {
    return fav.some(item => item.id === product.id)
  }

  const isProductInFav = checkProductInFav(product)

  return (
    <>
      <Button
        className={state ? 'visible boton bg-transparent position-absolute top-50 start-50 translate-middle' : 'invisible boton bg-transparent position-absolute top-50 start-50 translate-middle'}
        variant='outline-primary border-0'
        onClick={() => {
          handleShow()
          setState(false)
        }}
      >
        <SearchIcon />
        <p className='fs-6 text-primary'>Vista rápida</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered size='lg' className='text-primary'>
        <Modal.Body>
          <div className='position-absolute top-0 end-0 m-3' onClick={handleClose}>
            <CloseButton />
          </div>
          <div className='position-absolute top-0 start-0 m-3'>
            <Button
              variant='outline-primary border-0 bg-transparent p-0'
              onClick={
                                () => {
                                  isProductInFav
                                    ? removeFromFav(product)
                                    : addToFav(product)
                                }
                            }
            >

              {isProductInFav ? <FavFillIcon /> : <FavIcon />}

            </Button>
          </div>

          <Row className='my-2 mx-auto gap-5'>
            <Col className='d-flex justify-content-center' xl={4}>
              <Image className='rounded shadow ms-5' src={product.src} height={250} />

            </Col>
            <Col>
              <Container width='250svw'>
                <h2 className='fs-5 fw-light text-uppercase m-0'>{product.nombre}</h2>
                <small className='text-body-tertiary'>Colección: {product.coleccion}</small>
                <p className='mt-3'>$ {product.precio}</p>
                <hr />
                <Variantes colors={product.colores} />
                {product.stock
                  ? (
                    <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><CheckIcon size={18} /> Producto disponible</p>
                    )
                  : (
                    <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-danger fw-light mb-2'><AlertIcon size={18} /> Producto agotado</p>
                    )}
                <Container className='p-0'>
                  <Row class='d-flex gap-3'>
                    <Col className='d-grid'>
                      <Link className='d-grid' style={{ textDecoration: 'none' }} to={`/producto/${product.id}`}>
                        <Button variant='outline-primary fw-light' onClick={handleClose}>Ver detalles</Button>
                      </Link>
                    </Col>
                    <Col className='d-grid'>
                      <AddToCartButton product={product} />
                      <MultiToast titulo='¡Agregado!' texto='Clickea en el ícono de bolsa para ver todos los productos que has agregado.' icono={<CartIcon size={20} />} showToast={showToast} setShowToast={setShowToast} />
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Col>
          </Row>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalQuick
