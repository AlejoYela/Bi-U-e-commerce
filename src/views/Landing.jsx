import React from 'react'
import BestRating from '../components/BestRating'
import ProductoEstrella from '../components/ProductoEstrella'
import VeganSection from '../components/VeganSection'
import Hero from '../components/Hero'

function Landing () {
  return (
    <div>
      <Hero />
      <h1 id='Favoritos' className='display-4 text-center mt-5 pt-5 fw-normal'>BiU: Tienda de Maquillaje, Skincare y Accesorios</h1>
      <BestRating />
      <ProductoEstrella />
      <VeganSection />
    </div>
  )
}

export default Landing
