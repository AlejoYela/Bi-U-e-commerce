import React, { useState } from 'react';
import { Button, Card, Badge, Fade } from 'react-bootstrap';
import ModalQuick from './ModalQuick';
import { Link } from 'react-router-dom';

function CardFav({ product }) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className={isHovered ? 'card h100 border-1' : 'card h100 border-0'} style={{ width: '18rem' }}>
      <div className='position-relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Fade in={isHovered} appear>
          <Card.Img loading='lazy' variant="top" src={product.api_featured_image} style={{ opacity: isHovered ? 0.2 : 1, height: '200px', objectFit: 'cover' }} />
        </Fade>
        <ModalQuick product={product} state={isHovered} />
      </div>

      <Card.Body>
        <Card.Title className='fw-bold fs-6 text-primary'>
          <small>{product.name.toUpperCase()}</small>
        </Card.Title>
        <p className='fs-4 text-primary'>
          <Badge bg="secondary" text='primary' className='fw-normal'>
            <img alt="" src="icons/star.svg" width="17" height="17" className="d-inline-block align-top" /> {product.rating ? product.rating : 'Sin calificación'}
          </Badge>
        </p>
        <Card.Text className='fw-light text-primary fs-5'>
          $ {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='bg-transparent border-0'>
        <Link className="d-grid" style={{ textDecoration: 'none' }} to={`/producto/${product.product_type}/${product.id}`}>
          <Button variant="outline-primary" size='lg' className='fw-light border-1 mb-2'>Ver producto</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardFav;
