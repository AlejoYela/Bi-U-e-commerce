import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function CardFav({ name, description, price, stars, img }) {
  return (
    <Card className='card h100' style={{ width: '28rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='fw-normal text-primary'>
          {name}
        </Card.Title>
        <p className='fs-4 fw-light text-primary'><Badge bg="secondary" text='primary'>⭐ {stars}</Badge></p>
        <Card.Text className='fw-light text-primary'>
          {description}
        </Card.Text>
        <Button variant="secondary" className='border-primary fw-light'>Ver producto</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted fs-5 text-primary">{`${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'COP' }).format(
          price,
        )}`}</small>
      </Card.Footer>
    </Card>
  );
}

export default CardFav;