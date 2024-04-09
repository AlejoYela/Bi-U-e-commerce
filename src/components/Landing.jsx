import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';
import Footer from './Footer';
import VeganSection from './VeganSection';


function Landing() {
    return (<div>
        <InitialShop />
        <Favoritos />
        <ProductoEstrella />
        <VeganSection />
        <Footer />
    </div>);
}

export default Landing;