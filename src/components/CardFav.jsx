import React, { useState } from 'react';
import { Button, Card, Badge, Fade } from 'react-bootstrap';
import ModalQuick from './ModalQuick';
import { Link } from 'react-router-dom';
import { StarIcon } from '../icons/Icons';

function CardFav({ product }) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className={isHovered ? 'card h100 border-1 shadow' : 'card h100 border-0 shadow'} style={{ width: '15rem' }}>
      <div className='position-relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Fade in={isHovered} appear>
          <Card.Img loading='lazy' variant="top" src={product.api_featured_image} style={{ opacity: isHovered ? 0.2 : 1, height: '200px', objectFit: 'cover' }} />
        </Fade>
        <ModalQuick product={product} state={isHovered} />
      </div>

      <Card.Body>
        <Card.Title className='fw-bold fs-6 text-primary'>
          <small className='fw-normal text-black'>{product.name.toUpperCase()}</small>
        </Card.Title>

      </Card.Body>
      {product.rating &&

        <div className='d-flex mx-3'>
          <StarIcon />
          {product.rating}
        </div>

      }
      <p className='fw-light fs-5 mx-3'>
        $ {product.price}
      </p>
      <Card.Footer className='bg-transparent border-0'>
        <Link className="d-grid" style={{ textDecoration: 'none' }} to={`/producto/${product.product_type}/${product.id}`}>
          <Button variant="outline-black border " size='lg' className='fw-light border-1 mb-2'>Ver producto</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardFav;
