import { useState } from 'react'
import { useFav } from '../hooks/useFav'
import { useCart } from '../hooks/useCart'
import { Button, Container, ListGroup, Image } from 'react-bootstrap'
import { CheckCartIcon, AddToCartIcon, FavFillIcon, BrokenHearthIcon, CheckIcon, AlertIcon } from '../icons/Icons'
import { Link } from 'react-router-dom'

function Favoritos () {
  const { fav, clearFav, removeFromFav } = useFav()
  const { cart, addToCart, removeFromCart } = useCart()
  const [hover, setHover] = useState(false)

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <Container fluid='md mb-5'>
      <h2 className='text-center my-5 text-uppercase fw-light fs-3'>productos favoritos</h2>

      {fav.length <= 0 &&
        <div className='text-center'>
          <BrokenHearthIcon size={50} strokeWidth={0.5} color='#000000' />
          <p className='fw-light fs-5'>
            No tienes productos favoritos
          </p>
        </div>}

      <ListGroup>

        {fav.map(product => (
          <ListGroup.Item key={product.id} className='d-inline-flex justify-content-between align-items-center'>
            <div>
              <Link to={`/producto/${product.id}`}>
                <Image fluid className='border-0 rounded' src={product.src} width={100} style={{ objectFit: 'cover', height: '100px' }} />
              </Link>
            </div>
            <div className='w-50'>
              <p className='text-truncate text-uppercase fs-5 m-0'>{product.nombre}</p>

              {product.stock
                ? (
                  <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><CheckIcon size={18} /> Producto disponible</p>
                  )
                : (
                  <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-danger fw-light mb-2'><AlertIcon size={18} /> Producto agotado</p>
                  )}
              <p className='fw-light text-truncate m-0'>{product.descripcion}</p>
            </div>

            <div>
              <h3 className='fw-light'>$ {product.precio}</h3>
            </div>
            <div className='d-inline-flex gap-2'>
              <Button
                variant='outline-dark d-inline-flex gap-1'
                className='fw-light'
                size='lg'
                onClick={() => {
                  if (checkProductInCart(product)) {
                    removeFromCart(product)
                  } else {
                    addToCart(product)
                  }
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {checkProductInCart(product)
                  ? (
                    <>
                      {hover
                        ? (
                          <>
                            <CheckCartIcon size={25} strokeWidth={1} color='#000000' />
                            Eliminar de la bolsa
                          </>
                          )
                        : (
                          <>
                            <CheckCartIcon size={25} strokeWidth={1} color='#000000' />
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
                            <AddToCartIcon size={25} strokeWidth={1} color='#000000' />
                            Añadir a la bolsa
                          </>
                          )
                        : (
                          <>
                            <AddToCartIcon size={25} strokeWidth={1} color='#000000' />
                            Añadir a la bolsa
                          </>
                          )}
                    </>
                    )}
              </Button>

            </div>
            <div>
              <Button className='bg-transparent border-0' onClick={() => removeFromFav(product)}>
                <FavFillIcon />
              </Button>

            </div>
          </ListGroup.Item>
        ))}

      </ListGroup>

      {fav.length > 0 &&
        <div className='text-center mt-4'>
          <Button variant='outline-primary' className='fw-light fs-5' onClick={() => clearFav()}>Vaciar lista de favoritos</Button>
        </div>}

    </Container>
  )
}

export default Favoritos
