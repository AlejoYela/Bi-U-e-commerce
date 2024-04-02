import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFav() {
  return (
    <Card className='card h100'>
      <Card.Img variant="top" src="skincare.png" />
      <Card.Body>
        <h4>⭐⭐⭐⭐⭐</h4>
        <Card.Title>
          Card Title
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary" className='border-primary'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">$50.000 COP</small>
      </Card.Footer>
    </Card>
  );
}

export default CardFav;