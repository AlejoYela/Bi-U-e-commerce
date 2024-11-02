import { Modal, Button, Form, InputGroup, ListGroup, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { SearchIcon, BiuLogo } from '../icons/Icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ModalSearch () {
  const [search, setSearch] = useState(false)
  const handleClose = () => setSearch(false)
  const handleShow = () => setSearch(true)
  const [productos, setProductos] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get('https://biu-api.onrender.com/productos')
      .then(({ data }) => {
        setProductos(data)
      })
      .catch((error) => {
        console.log('Error en importación de datos desde la API')
        console.error(error)
      })
  }, [search])

  // Filtrar productos según el valor de búsqueda
  const filteredProductos = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(searchValue.toLowerCase()) ||
    producto.subcategoria.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <Button
        variant='outline-primary border-0 bg-transparent'
        onClick={handleShow}
        aria-label='Abrir buscador'
      >
        <SearchIcon />
      </Button>
      <Modal show={search} onHide={handleClose} centered>
        <Modal.Header>
          <InputGroup>
            <InputGroup.Text className='bg-secondary'>
              <SearchIcon strokeWidth={0.5} />
            </InputGroup.Text>
            <Form.Control
              className='fw-light'
              type='text'
              placeholder='Buscar productos o categorías'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputGroup>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {filteredProductos.slice(0, 3).map(producto => (
              <Link
                className='focus-ring focus-ring-primary'
                key={producto.id}
                to={`/producto/${producto.id}`}
                style={{ textDecoration: 'none' }}
                onClick={handleClose}
              >
                <ListGroup.Item className='d-inline-flex justify-content-between gap-2 w-100'>
                  <Image src={producto.src} className='w-25 h-25 shadow' rounded />
                  <div className='w-50 text-truncate align-items-center'>
                    <small className='text-uppercase text-truncate'>{producto.nombre}</small><br />
                    <small className='fw-light'>Colección: {producto.coleccion}</small>
                    <p className='fw-lighter m-0'>{producto.descripcion}</p>
                    <ul className='d-flex gap-4 m-0 px-3'>
                      <li>
                        <small className='m-0'>{producto.categoria}</small>
                      </li>
                      <li>
                        <small className='m-0'>{producto.subcategoria}</small>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>$ {producto.precio}</p>
                  </div>
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Link to='/productos'>
            <Button variant='outline-primary' className='fw-light' onClick={handleClose}>Maquillaje</Button>
          </Link>
          <Link to='/productos'>
            <Button variant='outline-primary' className='fw-light' onClick={handleClose}>Skincare</Button>
          </Link>
          <BiuLogo />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalSearch
