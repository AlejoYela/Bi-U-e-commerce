import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';
import VeganSection from './VeganSection';



function Landing() {
    return (<div>
        <InitialShop />
        <Favoritos/>
        <ProductoEstrella />
        <VeganSection />
    </div>);
}

export default Landing;