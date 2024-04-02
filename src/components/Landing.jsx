import React from 'react';
import InitialShop from './InitialShop';
import Favoritos from './Favoritos';
import CategoriasLanding from './CategoriasLanding';

function Landing() {
    return ( <div>
        <InitialShop/>
        <Favoritos/>
        <CategoriasLanding/>
    </div> );
}

export default Landing;