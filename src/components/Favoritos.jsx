import React, { useState, useEffect } from 'react';
import CarouserCards from './CarouselCards';
import useScreenSize from '../hooks/useScreenSize';
import axios from 'axios';

function Favoritos() {
  const [productosFav, setProductos] = useState([]);
  const { width } = useScreenSize();

  useEffect(() => {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.8`)
      .then(({ data }) => {
        // Limitar la cantidad de productos obtenidos
        setProductos(data.slice(0, 12));
      })
      .catch((error) => {
        console.error('Error al obtener los productos favoritos:', error);
        // Aquí puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario
      });
  }, []);

  // Definir la configuración de responsive para el carrusel
  const responsive = {
    desktop: "10svw 15svw 10svw 15svw",
    mobile: "10svw 5svw 10svw 5svw"
  };

  return (
    <div style={{ margin: width >= 1289 ? responsive.desktop : responsive.mobile }} id='Favoritos'>
      <div className='text-center mb-5'>
        <h2 className='text-primary fw-normal'>F A V O R I T O S</h2>
        <h3 className='text-primary fs-4 fw-light'>¡Los productos más populares!</h3>
      </div>
      <CarouserCards productos={productosFav} />
    </div>
  );
}

export default Favoritos;
