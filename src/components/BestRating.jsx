import React, { useState, useEffect } from 'react';
import CarouserCards from './CarouselCards';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

function BestRating() {
  const [loading, setLoading] = useState(true)
  const [productosFav, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.8`)
      .then(({ data }) => {
        // Limitar la cantidad de productos obtenidos
        setProductos(data.slice(0, 12));
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al obtener los productos favoritos:', error);
        setLoading(true)
        // Aquí puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario
      });
  }, []);

  return (
    <div id='Favoritos' className='my-5'>
      <h1 className='display-4 text-center mb-3 fw-normal'>BiU: Tienda de Maquillaje, Skincare y Accesorios</h1>
      <Row className='mw-100'>
        <Col className='d-flex align-items-center justify-content-center mx-5 px-5 text-center'>
          <div>
            <h2 className='mt-5 d-block d-md-none'>Los Preferidos</h2>
            <h2 className='d-none d-md-block'>Los mejor calificados en maquillaje y skincare por nuestros clientes</h2>
          </div>
        </Col>
        <Col className='w-75'>
          <CarouserCards productos={productosFav} loading={loading} />
        </Col>
      </Row>
    </div>
  );
}

export default BestRating;