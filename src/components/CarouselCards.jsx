import { Carousel, Button, Placeholder, Card } from 'react-bootstrap'
import CardFav from './CardFav'
import useScreenSize from '../hooks/useScreenSize'
import { PrevIcon, NextIcon } from '../icons/Icons'

function CarouselCards ({ productos, loading }) {
  const { width } = useScreenSize()

  // Helper function to group productos based on responsive breakpoints
  const groupProductos = (productos, breakpointItems) => {
    const groupedProductos = []
    let index = 0

    while (index < productos.length) {
      groupedProductos.push(productos.slice(index, index + breakpointItems))
      index += breakpointItems
    }

    return groupedProductos
  }

  const responsive = {
    items: width >= 2000 ? 4 : width >= 1500 ? 3 : width >= 589 ? 2 : 1
  }

  return (
    <div className='d-flex justify-content-center'>
      <Carousel interval={null} responsive={responsive} indicators={false} nextIcon={<Button className='rounded-pill'><NextIcon /></Button>} prevIcon={<Button className='rounded-pill'><PrevIcon /></Button>}>

        {loading && [1, 2, 3].map((index) => (
          <Carousel.Item key={0} className='d-flex justify-content-center gap-3 px-2 py-4'>
            <Card key={index} width='18rem' style={{ width: '18rem' }}>
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
          </Carousel.Item>
        ))}

        {groupProductos(productos, responsive.items).map((group, index) => (
          <Carousel.Item key={index}>
            <div className='d-flex justify-content-center gap-3 px-2 py-4' xs={12} sm={6} md={4} lg={3}>
              {group.map((product) => (

                <CardFav key={index} product={product} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselCards
