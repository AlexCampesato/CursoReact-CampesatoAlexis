import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getItems } from '../api/api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



export default function ItemListContainer({greetings}) {

    const[ItemsList, setItemsList] = useState([]);
    const {categoryId} = useParams();


    useEffect(() => {
        const traerProductos = new Promise ((res, rej)=>{
            setTimeout(()=>{
                if(categoryId===undefined)
                res(items);
                else{
                    const itemsFound = items.filter(productos=>{
                        return productos.category===categoryId;
                    })
                    res(itemsFound)
                }
            },600);
        });
        
        getItems().then((res)=>{
            
            setItemsList(res);
        }).catch((error)=>{
            console.log(error);
        });

    }, [categoryId]);




return (<div>
    <p class="TextPino">Ofertas</p>
    { ItemsList.length === 0 ? <p>cargando...</p> : <ItemList items={ItemsList} /> }
    
    </div>
);
}
    

