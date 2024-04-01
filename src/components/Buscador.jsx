import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Buscador() {
  const [imageSrc, setImageSrc] = useState('search-vine.svg');

  const handleImageHover = () => {
    setImageSrc('search-white.svg');
  };

  const handleImageLeave = () => {
    setImageSrc('search-vine.svg');
  };

  return (
    <Form className="d-flex">
      <Form.Control type="search" placeholder="Buscar" className="me-2 fs-5" aria-label="Search" />

      <Button
        className="boton"
        variant="outline-primary border-2"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      >
        <a href="#">
          <img src={imageSrc} alt="Buscar" />
        </a>
      </Button>
    </Form>
  );
}

export default Buscador;
