import React, { useState, useEffect } from 'react'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import axios from 'axios'
import MultiToast from '../components/MultiToast'
import { CartIcon, CheckCartIcon, AddToCartIcon } from '../icons/Icons'

function ProductoEstrella () {
  const { cart, addToCart, removeFromCart } = useCart()
  const [producto, setProducto] = useState([])
  const [showToast, setShowToast] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    axios(`http://localhost:4321/productos/${9}`)
      .then(({ data }) => {
        setProducto(data)
      })
      .catch((error) => {
        console.error(error)
      }).finally(() => {

      })
  }, [])

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  const isProductInCart = checkProductInCart(producto)

  return (
    <>
      <div className='d-xl-flex flex-column position-relative d-none'>
        <Image src='images/specials/4.png' />
        <div className='position-absolute top-50 start-50 translate-middle-y me-5 pe-5'>
          <h3 className='fs-5 fw-bold text-uppercase m-0'>Nuevo SUERO ANTIOXIDANTE</h3>
          <p className='mb-3 text-body-tertiary'>Con vitamina C</p>
          <p className='lh-1 fw-light fs-5'>Textura ligera, acabado luminoso. Reduce manchas del sol, mejora la apariencia de la piel. Fórmula no comedogénica para todo tipo de piel. ¡Piel radiante todos los días!</p>
          <div className='d-flex gap-2 mt-5'>
            <Link to='/producto/9'>
              <Button
                className='fw-light d-inline-flex gap-1'
                size='lg'
              >
                Ver producto
              </Button>
            </Link>
            <Button
              className='fw-light d-inline-flex gap-1'
              variant='outline-primary'
              size='lg'
              onClick={
                                    () => {
                                      if (isProductInCart) {
                                        removeFromCart(producto)
                                      } else {
                                        addToCart(producto)
                                        setShowToast(true) // Mostrar el toast solo cuando se agrega el producto
                                      }
                                    }
                                }
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >

              {isProductInCart
                ? (
                  <>
                    {hover
                      ? (
                        <>
                          <CheckCartIcon size={20} strokeWidth={1} color='#FFFFFF' />
                          Eliminar de la bolsa
                        </>
                        )
                      : (
                        <>
                          <CheckCartIcon size={20} strokeWidth={1} color='#000000' />
                          Producto agregado
                        </>
                        )}
                  </>
                  )
                : (
                  <>
                    {hover
                      ? (
                        <>
                          <AddToCartIcon size={20} strokeWidth={1} color='#FFFFFF' />
                          Añadir a la bolsa
                        </>
                        )
                      : (
                        <>
                          <AddToCartIcon size={20} strokeWidth={1} color='#000000' />
                          Añadir a la bolsa
                        </>
                        )}
                  </>
                  )}
            </Button>
          </div>
        </div>
        <MultiToast titulo='¡Agregado!' texto='Clickea en el ícono de bolsa para ver todos los productos que has agregado.' icono={<CartIcon size={20} />} showToast={showToast} setShowToast={setShowToast} />
      </div>
      <div className='d-flex flex-column w-100 d-block d-xl-none position-relative'>
        <Image src='images/specials/5.png' style={{ filter: 'blur(4px)' }} />
        <div className='position-absolute bottom-0 start-50 translate-middle w-100 text-center'>
          <h3 className='fs-5 fw-bold text-uppercase m-0'>Nuevo SUERO ANTIOXIDANTE</h3>
          <p className='mb-3 text-light'>Con vitamina C</p>
          <p className='lh-1 fw-normal fs-5'>Textura ligera, acabado luminoso. Reduce manchas del sol, mejora la apariencia de la piel. Fórmula no comedogénica para todo tipo de piel. ¡Piel radiante todos los días!</p>
          <div className='d-flex gap-2 mt-5 justify-content-center'>
            <Link to='/producto/9'>
              <Button
                className='fw-light d-inline-flex gap-1'
              >
                Ver producto
              </Button>
            </Link>
            <Button
              className='fw-light d-inline-flex gap-1'
              variant='outline-primary'
              onClick={
                                    () => {
                                      if (isProductInCart) {
                                        removeFromCart(producto)
                                      } else {
                                        addToCart(producto)
                                        setShowToast(true) // Mostrar el toast solo cuando se agrega el producto
                                      }
                                    }
                                }
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >

              {isProductInCart
                ? (
                  <>
                    {hover
                      ? (
                        <>
                          <CheckCartIcon size={20} strokeWidth={1} color='#FFFFFF' />
                          Eliminar de la bolsa
                        </>
                        )
                      : (
                        <>
                          <CheckCartIcon size={20} strokeWidth={1} color='#000000' />
                          Producto agregado
                        </>
                        )}
                  </>
                  )
                : (
                  <>
                    {hover
                      ? (
                        <>
                          <AddToCartIcon size={20} strokeWidth={1} color='#FFFFFF' />
                          Añadir a la bolsa
                        </>
                        )
                      : (
                        <>
                          <AddToCartIcon size={20} strokeWidth={1} color='#000000' />
                          Añadir a la bolsa
                        </>
                        )}
                  </>
                  )}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductoEstrella
