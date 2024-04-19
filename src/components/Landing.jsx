import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';
import VeganSection from './VeganSection';
import Hero from './Hero';



function Landing() {
    return (<div>
        {/* <InitialShop /> */}
        <Hero />
        <Favoritos />
        <ProductoEstrella />
        <VeganSection />
    </div>);
}

export default Landing;