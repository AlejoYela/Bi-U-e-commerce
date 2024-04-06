import React, { useState } from 'react';
import { Button, Card, Badge } from 'react-bootstrap'
import ModalQuick from './ModalQuick';

function CardFav({ name, price, stars, img, stock }) {

  const [isShown, setIsShown] = useState(false);

  return (
    <Card className='card h100 shadow' style={{ width: '28rem' }}>
      <div className='position-relative' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <Card.Img variant="top" src={img} style={{ opacity: isShown ? 0.2 : 1, transition: 'opacity 0.5s ease-in-out;' }} />
        <ModalQuick state={isShown} name={name} price={price} img={img} stock={stock} />
      </div>

      <Card.Body>

        <Card.Title className='fw-bold fs-6 text-primary'>
          <small>{name.toUpperCase()}</small>
        </Card.Title>
        <p className='fs-4 text-primary'><Badge bg="secondary" text='primary' className='fw-normal'><img alt="" src="icons/star.svg" width="17" height="17" className="d-inline-block align-top" /> {stars}</Badge></p>
        <Card.Text className='fw-light text-primary fs-5'>
          {`${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'COP' }).format(
            price,
          )}`}
        </Card.Text>

        <div className="d-grid">
          <Button variant="outline-primary" size='lg' className='fw-light'>Ver producto</Button>
        </div>
      </Card.Body>

    </Card>
  );
}

export default CardFav;