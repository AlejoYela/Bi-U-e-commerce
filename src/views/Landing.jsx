import React from 'react';
import Favoritos from '../components/BestRating';
import ProductoEstrella from '../components/ProductoEstrella';
import VeganSection from '../components/VeganSection';
import Hero from '../components/Hero';



function Landing() {
    return (<div>
        <Hero />
        <Favoritos />
        <ProductoEstrella />
        <VeganSection />
    </div>);
}

export default Landing;