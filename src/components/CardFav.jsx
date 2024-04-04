import React, { useState } from 'react';
import { Button, Card, Badge } from 'react-bootstrap'

function CardFav({ name, description, price, stars, img }) {

  const [isShown, setIsShown] = useState(false);

  return (
    <Card className='card h100 shadow' style={{ width: '28rem' }}>
      <div className='position-relative'>
        {isShown &&
          <Button
            className="boton bg-transparent position-absolute top-50 start-50 translate-middle"
            variant="outline-primary border-0"
          >
            <img src='icons/search-vine.svg' alt="Buscar" width={80} />
            <p className='fs-5'>Ver detalle</p>
          </Button>
        }
        <a href="#">
          <Card.Img variant="top" src={img} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{ opacity: isShown ? 0.2 : 1 }} />
        </a>
      </div>

      <Card.Body>
        <Card.Title className='fw-normal text-primary'>
          {name}
        </Card.Title>
        <p className='fs-4 fw-lighter text-primary'><Badge bg="secondary" text='primary'><img alt="" src="icons/star.svg" width="17" height="17" className="d-inline-block align-top fs-3" /> {stars}</Badge></p>
        <Card.Text className='fw-light text-primary'>
          {description}
        </Card.Text>

      </Card.Body>
      <Card.Footer>
        <small className="fw-normal fs-6 text-primary">{`${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'COP' }).format(
          price,
        )}`}</small>
      </Card.Footer>
      <Button variant="outline-primary" className='fw-light rounded-bottom'>Ver producto {'>'}</Button>
    </Card>
  );
}

export default CardFav;