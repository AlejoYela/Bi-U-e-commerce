import React, { useState } from 'react';
import { Button, Card, Badge, Fade } from 'react-bootstrap';
import ModalQuick from './ModalQuick';

function CardFav({ name, price, stars, img, stock, colors }) {
  const [isHovered, setIsHovered] = useState(false);

  const pesosConversion = `${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'COP' }).format((price * 3770))}`;

  return (
    <Card className='card h100 shadow' style={{ width: '28rem' }}>
      <div className='position-relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Fade in={isHovered} appear>
          <Card.Img variant="top" src={img} style={{ opacity: isHovered ? 0.2 : 1 }} />
        </Fade>
        <ModalQuick state={isHovered} name={name} price={pesosConversion} img={img} stock={stock} colors={colors} />
      </div>

      <Card.Body>
        <Card.Title className='fw-bold fs-6 text-primary'>
          <small>{name.toUpperCase()}</small>
        </Card.Title>
        <p className='fs-4 text-primary'>
          <Badge bg="secondary" text='primary' className='fw-normal'>
            <img alt="" src="icons/star.svg" width="17" height="17" className="d-inline-block align-top" /> {stars}
          </Badge>
        </p>
        <Card.Text className='fw-light text-primary fs-5'>
          {pesosConversion}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='bg-transparent border-0'>
        <div className="d-grid">
          <Button variant="outline-primary" size='lg' className='fw-light'>Ver producto</Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CardFav;
