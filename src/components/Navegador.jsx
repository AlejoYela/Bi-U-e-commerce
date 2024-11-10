import React from 'react'
import { Container, Navbar, Nav, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cart from './Cart.jsx'
import { FavIcon } from '../icons/Icons.jsx'
import { useFav } from '../hooks/useFav.js'
import Categorias from './Categorias.jsx'

import ModalSearch from './ModalSearch.jsx'
import User from './User.jsx'

function Navegador () {
  const { fav } = useFav()

  return (
    <Navbar expand='lg' className='bluring bg-secondary px-4 sticky-top bg-opacity-50'>
      <Container fluid>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='fw-normal fs-2'>

            {' '}CALEZA
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='mx-auto' style={{ maxHeight: '200px' }} navbarScroll>
            <Categorias />
            <Nav.Link className='fs-5 fw-light' href='#Favoritos'>Favoritos</Nav.Link>
            <Nav.Link className='fs-5 fw-light' href='#Contacto'>Contacto</Nav.Link>
          </Nav>
          <Nav className='d-flex flex-row-reverse'>

            <User />

            <Link to='/favoritos'>
              <Button className='boton' variant='outline-primary border-0 bg-transparent'>
                <FavIcon /><Badge bg='primary'>{fav.length}</Badge>
              </Button>
            </Link>

            <Cart />

            <ModalSearch />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegador
