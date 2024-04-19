import React, { useState, useEffect } from 'react';
import CarouserCards from './CarouselCards';
import useScreenSize from '../hooks/useScreenSize';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

function Favoritos() {
  const [loading, setLoading] = useState(true)
  const [productosFav, setProductos] = useState([]);
  const { width } = useScreenSize();

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

  // Definir la configuración de responsive para el carrusel
  const responsive = {
    desktop: "3svw auto 3svw auto",
    mobile: "10svw 5svw 10svw 5svw"
  };

  return (
    <div style={{ margin: width >= 1289 ? responsive.desktop : responsive.mobile }} id='Favoritos'>
      <div className='text-center mb-5'>
        <h1 className='fw-light'>BiU: TIENDA DE MAQUILLAJE, SKINCARE Y ACCESORIOS</h1>
      </div>
      <Row className='mw-100'>
        <Col className='d-flex align-items-center m-5 p-5'>
          <div>
            <h2>Favoritos: lo mejor en maquillaje y skincare según nuestros clientes</h2>
          </div>
        </Col>
        <Col className='w-75'>
          <CarouserCards productos={productosFav} loading={loading} />
        </Col>
      </Row>
    </div>
  );
}

export default Favoritos;
