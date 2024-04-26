import React, { useState, useEffect } from 'react'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import axios from 'axios'
import MultiToast from '../components/MultiToast'
import { CartIcon, CheckCartIcon, AddToCartIcon, RemoveFromCartIcon } from '../icons/Icons'

const AddToCartButton = ({ isProductInCart, addToCart, removeFromCart, setShowToast, hover, producto, setHover, size = 'md' }) => {
  return (
    <Button
      className='fw-light d-inline-flex gap-1'
      variant='outline-primary'
      size={size}
      onClick={() => {
        if (isProductInCart) {
          removeFromCart(producto)
        } else {
          addToCart(producto)
          setShowToast(true)
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isProductInCart
        ? (
          <>
            {hover
              ? (
                <>
                  <RemoveFromCartIcon size={20} strokeWidth={1} color='#FFFFFF' />
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
  )
}

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
    <div className='position-relative'>
      <Image src='images/specials/4.png' className='d-none d-lg-flex flex-column w-100' />
      <Image src='images/specials/5.png' className='d-lg-none w-100' />
      <div className='position-absolute top-50 start-50 translate-middle-y mx-5 px-5 d-none d-lg-block'>
        <h3 className='fs-5 fw-bold text-uppercase m-0'>Nuevo SUERO ANTIOXIDANTE</h3>
        <p className='mb-3 text-body-tertiary'>Con vitamina C</p>
        <p className='lh-1 fw-light fs-5 pe-5 me-5'>Textura ligera, acabado luminoso. Reduce manchas del sol, mejora la apariencia de la piel. Fórmula no comedogénica para todo tipo de piel. ¡Piel radiante todos los días!</p>
        <div className='d-flex gap-2 mt-5 justify-content-start'>
          <Link to='/producto/9'>
            <Button className='fw-light d-inline-flex gap-1'>Ver producto</Button>
          </Link>
          <AddToCartButton
            isProductInCart={isProductInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            setShowToast={setShowToast}
            hover={hover}
            producto={producto}
            setHover={setHover}
          />
        </div>
      </div>
      <div className='position-absolute bottom-0 start-50 translate-middle-x d-lg-none text-center w-100 mb-4'>
        <h3 className='fs-6 fw-bold text-uppercase m-0'>Nuevo SUERO ANTIOXIDANTE</h3>
        <p className='mb-2 text-body-tertiary'>Con vitamina C</p>
        <p className='lh-1 fw-light fs-6'>Textura ligera, acabado luminoso. Reduce manchas del sol, mejora la apariencia de la piel. Fórmula no comedogénica para todo tipo de piel. ¡Piel radiante todos los días!</p>
        <div className='d-flex gap-2 mt-2 justify-content-center'>
          <Link to='/producto/9'>
            <Button className='fw-light d-inline-flex gap-1' size='sm'>Ver producto</Button>
          </Link>
          <AddToCartButton
            isProductInCart={isProductInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            setShowToast={setShowToast}
            hover={hover}
            producto={producto}
            setHover={setHover}
            size='sm'
          />
        </div>
      </div>
      <MultiToast titulo='¡Agregado!' texto='Clickea en el ícono de bolsa para ver todos los productos que has agregado.' icono={<CartIcon size={20} />} showToast={showToast} setShowToast={setShowToast} />
    </div>
  )
}

export default ProductoEstrella
