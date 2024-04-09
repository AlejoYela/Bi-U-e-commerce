import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';
import VeganSection from './VeganSection';



function Landing({productos}) {
    return (<div>
        <InitialShop />
        <Favoritos productos={productos}/>
        <ProductoEstrella />
        <VeganSection />
    </div>);
}

export default Landing;