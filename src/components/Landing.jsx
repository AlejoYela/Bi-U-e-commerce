import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import ProductoEstrella from './ProductoEstrella';
import VeganSection from './VeganSection';
import Initial from './Initial';



function Landing() {
    return (<div>
        {/* <InitialShop/> */}
        <Initial/>
        <Favoritos/>
        <ProductoEstrella />
        <VeganSection />
    </div>);
}

export default Landing;