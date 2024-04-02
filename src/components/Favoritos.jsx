import React from 'react';
import CarouserCards from './CarouselCards';
import useScreenSize from '../hooks/useScreenSize';

function Favoritos() {

  const { width} = useScreenSize();

  const responsive = {
    desktop: "10svw 15svw 10svw 15svw",
    mobile: "10svw 5svw 10svw 5svw"
  };

  return (
    <div style={{margin: width >= 1289 ? responsive.desktop: responsive.mobile}}>
      <div className='text-center mb-5'>
        <h2 className='text-primary fw-normal'>FAVORITOS</h2>
        <h3 className='text-primary fs-4 fw-light'>!Los productos más populares!</h3>
      </div>
      <CarouserCards />
    </div>
  );
}

export default Favoritos;
