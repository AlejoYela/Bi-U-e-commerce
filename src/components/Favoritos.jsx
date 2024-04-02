import React from 'react';
import CarouserCards from './CarouselCards';

function Favoritos() {

  return (
    <div className='mx-5 my-5'>
      <div className='text-center mb-3'>
        <h2 className='text-primary fw-normal'>FAVORITOS</h2>
        <h3 className='text-primary fs-4 fw-light'>!Los productos más populares!</h3>
      </div>
      <CarouserCards />
    </div>
  );
}

export default Favoritos;
