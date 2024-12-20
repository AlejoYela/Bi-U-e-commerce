import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Placeholder, Card } from 'react-bootstrap'
import axios from 'axios'
import CardFav from '../components/CardFav'
import FilterCategory from '../components/FilterCategory'
import FilterPrice from '../components/FilterPrice'
import { useFilters } from '../hooks/useFilters'

function All () {
  const [producto, setProducto] = useState([])
  const [cardsToShow, setCardsToShow] = useState(12)
  const [loading, setLoading] = useState(true)

  const { filters, filteredProducts } = useFilters()

  useEffect(() => {
    axios.get('https://biu-api.onrender.com/productos')
      .then(({ data }) => {
        setProducto(data)
        console.log('producto en all: ', producto)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error en importación de datos desde la API')
        console.error(error)
        setLoading(true)
      })
  }, [])

  const handleLoadMore = () => {
    setCardsToShow(prevCards => prevCards + 12)
  }

  const filteredProduct = filteredProducts(producto)

  return (
    <Container fluid='md'>
      <h2 className='text-center mt-5 text-uppercase fw-light fs-2'>{filters.categoria === 'all' ? 'Todos los productos' : filters.categoria}</h2>
      <h2 className='text-center text-uppercase fw-light fs-5'>{filters.subcategoria === 'all' ? '' : filters.subcategoria}</h2>

      <hr className='my-5' />
      <div className='d-flex gap-3 justify-content-end'>
        <div>
          <FilterPrice loading={loading} />
        </div>
        <div className='d-block d-md-none'>
          <FilterCategory productos={producto} loading={loading} />
        </div>
      </div>

      <Row className='justify-content-center'>
        <Col className='d-none d-md-block'>

          <FilterCategory productos={producto} loading={loading} />

        </Col>
        <Col lg={9}>

          {loading &&
            <Row className='d-flex justify-content-center'>
              {[1, 2, 3, 4].map((index) => (
                <Col className='d-flex px-2 mb-4 justify-content-center' xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card style={{ width: '15rem' }}>
                    <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant='top' src={`images/holders/${index}.png`} />
                    <Card.Body>
                      <Placeholder as={Card.Title} animation='glow'>
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation='glow'>
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                      </Placeholder>
                      <Placeholder.Button variant='primary' xs={6} />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>}
          <Row className='d-flex justify-content-center'>
            {filteredProduct
              .slice(0, cardsToShow)
              .map((producto) => (
                <Col className='d-flex px-1 mb-4 justify-content-center' xs={5} sm={6} md={4} lg={3} key={producto.id}>
                  <CardFav
                    product={producto}
                  />
                </Col>
              ))}
          </Row>

          <div className='text-center mt-4'>
            {cardsToShow < filteredProduct.length && (
              <Button className='fw-light fs-4 mb-5' variant='outline-primary' onClick={handleLoadMore}>
                Mostrar más
              </Button>
            )}
          </div>

        </Col>
      </Row>
    </Container>
  )
}

export default All
