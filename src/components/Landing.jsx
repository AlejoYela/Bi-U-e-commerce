import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';


function Landing() {
    return (<div>
        <InitialShop />
        <Favoritos />
        <ProductoEstrella />
    </div>);
}

export default Landing;