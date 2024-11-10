import React from 'react'
import BestRating from '../components/BestRating'
import ProductoEstrella from '../components/ProductoEstrella'
import VeganSection from '../components/VeganSection'
import Hero from '../components/Hero'

function Landing () {
  return (
    <div>
      <Hero />
      <h1 id='Favoritos' className='display-4 text-center fw-normal align-content-center mt-4'>Caleza: Tienda de Maquillaje, Skincare y Accesorios</h1>
      <BestRating />
      <ProductoEstrella />
      <VeganSection />
    </div>
  )
}

export default Landing
