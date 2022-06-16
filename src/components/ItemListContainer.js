import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

import { getItems } from '../api/api';
import ItemList from './ItemList';




export default function ItemListContainer() {

    const[products, setProducts]=useState([]);

    useEffect(() =>{
        getItems().then(function(products){
            console.log(products);
            setProducts(products);
        })

    }, []);



return (<div>
    <p class="TextPino">PinoBlanco fabrica de muebles industriales</p>
    { products.length > 0 ? <ItemList products={products} /> : <p>cargando...</p>}
    <ItemCount stock={5} initial={1} />
    </div>
);
}
    

