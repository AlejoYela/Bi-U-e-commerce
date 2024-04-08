import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';
import Footer from './Footer';


function Landing() {
    return (<div>
        <InitialShop />
        <Favoritos />
        <ProductoEstrella />
        <Footer/>
    </div>);
}

export default Landing;