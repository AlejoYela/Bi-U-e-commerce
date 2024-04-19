import React, { useState } from 'react';
import { Button, Card, Fade } from 'react-bootstrap';
import ModalQuick from './ModalQuick';
import { Link } from 'react-router-dom';
import { StarIcon } from '../icons/Icons';

function CardFav({ product }) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className='card border-0 shadow'
      style={{
        width: '15rem',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'translateY(-20px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='position-relative'>
        <Fade in={isHovered} appear>
          <Card.Img
            loading='lazy'
            variant="top"
            src={product.api_featured_image}
            style={{ opacity: isHovered ? 0.2 : 1, height: '200px', objectFit: 'cover' }}
          />
        </Fade>
        <ModalQuick product={product} state={isHovered} setState={setIsHovered} />
      </div>

      <Card.Body>
        <Card.Title className='fw-bold fs-6 text-primary text-truncate'>
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
          <Button variant="outline-dark border" size='lg' className='fw-light border-1 mb-2'>Ver producto</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardFav;
