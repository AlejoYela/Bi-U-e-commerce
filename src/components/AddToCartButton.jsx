import { useState } from 'react'
import { Button } from 'react-bootstrap'
import MultiToast from './MultiToast'
import { AddToCartIcon, CheckCartIcon, CartIcon } from '../icons/Icons'
import { useCart } from '../hooks/useCart'

function AddToCartButton ({ product, size = 'md' }) {
  const { cart, removeFromCart, addToCart } = useCart()
  const [buttonState, setButtonState] = useState({ hover: false, showToast: false })

  const handleButtonClick = () => {
    if (isProductInCart) {
      removeFromCart(product)
    } else {
      addToCart(product)
      setButtonState({ ...buttonState, showToast: true }) // Mostrar el toast solo cuando se agrega el producto
    }
  }

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  const isProductInCart = checkProductInCart(product)

  return (
    <>
      <Button
        className='boton d-inline-flex gap-1 justify-content-center'
        variant='outline-primary border-1 fw-light'
        onClick={handleButtonClick}
        onMouseEnter={() => setButtonState({ ...buttonState, hover: true })}
        onMouseLeave={() => setButtonState({ ...buttonState, hover: false })}
        size={size}
      >
        {isProductInCart
          ? (
            <>
              <CheckCartIcon size={20} strokeWidth={1} color={buttonState.hover ? '#FFFFFF' : '#000000'} />
              {buttonState.hover ? 'Eliminar de la bolsa' : 'Producto agregado'}
            </>
            )
          : (
            <>
              <AddToCartIcon size={20} strokeWidth={1} color={buttonState.hover ? '#FFFFFF' : '#000000'} />
              Añadir a la bolsa
            </>
            )}
      </Button>
      <MultiToast titulo='¡Agregado!' texto='Clickea en el ícono de bolsa para ver todos los productos que has agregado.' icono={<CartIcon size={20} />} showToast={buttonState.showToast} setShowToast={(value) => setButtonState({ ...buttonState, showToast: value })} />
    </>
  )
}

export default AddToCartButton
