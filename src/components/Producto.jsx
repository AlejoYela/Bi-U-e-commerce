import React from 'react';
import { useParams } from 'react-router-dom';

function Producto({productos}) {
    const {id} = useParams();

    return ( 
        <div>
            <h2>Producto: {id}</h2>
        </div>
     );
}

export default Producto;