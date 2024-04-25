import { useState } from 'react'
import { Button, Offcanvas, Badge, ListGroup, Image, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import { useCart } from '../hooks/useCart.js'
import { CartIcon, CheckIcon, AlertIcon, CartOffIcon } from '../icons/Icons.jsx'

function Cart () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { cart, clearCart, addToCart, removeFromCart } = useCart()

  let total = 0

  cart.forEach(element => {
    total += parseFloat(element.precio)
  })

  return (
    <div>

      <Button className='boton' variant='outline-primary border-0 bg-transparent' onClick={handleShow}>
        <CartIcon /><Badge bg='primary'>{cart.length}</Badge>
      </Button>

      <Offcanvas show={show} onHide={handleClose} scroll backdrop={false} placement='end'>
        <Offcanvas.Header closeButton>

          <Offcanvas.Title className='fw-light fs-2 d-inline-flex gap-1'>
            <CartIcon size={40} />
            Bolsa
            <h5>

              <Badge className='d-flex align-items-center fw-normal' bg='primary'>
                {cart.length}
              </Badge>
            </h5>
          </Offcanvas.Title>

        </Offcanvas.Header>
        <hr className='mt-0' />
        <Offcanvas.Body>
          {cart.length === 0 &&
            <div className='text-center'>
              <CartOffIcon />
              <p className='fw-light'>No tienes productos en la bolsa</p>
            </div>}
          <ListGroup className='mb-5'>
            {cart.map(product => (
              <ListGroup.Item key={product.id} className='d-flex flex-column gap-3'>
                <div className='d-flex justify-content-between gap-3'>
                  <Image className='border-0 rounded' src={product.src} width={80} height={80} />
                  <div className='w-50 text-truncate'>
                    <small className='text-uppercase fw-normal '>{product.nombre}</small><br />
                    {product.colores && product.colores.length > 0 && (
                      <Button className='rounded-pill border-primary border-0 p-1 mb-2' style={{ backgroundColor: product.colores[0].hex, height: '1rem', width: '1rem' }} />
                    )}<br />
                    {product.stock
                      ? (
                        <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><CheckIcon size={18} /> Disponible</p>
                        )
                      : (
                        <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-danger fw-light mb-2'><AlertIcon size={18} /> Agotado</p>
                        )}
                  </div>
                  <div>
                    <span className=' fw-light text-nowrap'>$ {product.precio}</span>
                  </div>
                </div>

                <ButtonToolbar className='d-flex justify-content-center'>
                  <ButtonGroup className='border border-1 border-primary me-2'>
                    <Button className='border-0 fw-light' variant='outline-primary'>{product.quantity}</Button>
                    <Button className='border-0' variant='outline-primary' onClick={() => addToCart(product)}>+</Button>
                  </ButtonGroup>
                  <ButtonGroup className='w-75'>
                    <Button className='fw-light' onClick={() => removeFromCart(product)} variant='outline-primary'>Eliminar</Button>
                  </ButtonGroup>
                </ButtonToolbar>

              </ListGroup.Item>
            ))}
          </ListGroup>

        </Offcanvas.Body>

        {cart.length !== 0 && <span className='mx-3 mt-4 fs-5 fw-light text-end'>Total: $ {total}</span>}
        <ButtonGroup className='m-3'>

          <Button variant='outline-primary fw-light fs-5' onClick={clearCart}>
            Vaciar bolsa
          </Button>
          <Button variant='outline-primary fw-light fs-5'>
            Ir a pagar
          </Button>
        </ButtonGroup>

      </Offcanvas>
    </div>

  )
}

export default Cart
