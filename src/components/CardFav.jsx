import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function CardFav({ name, description, price, stars, img }) {
  return (
    <Card className='card h100 shadow' style={{ width: '28rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='fw-normal text-primary'>
          {name}
        </Card.Title>
        <p className='fs-4 fw-lighter text-primary'><Badge bg="secondary" text='primary'>⭐ {stars}</Badge></p>
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