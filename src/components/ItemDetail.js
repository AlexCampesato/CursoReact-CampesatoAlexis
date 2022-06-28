import React,{ useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import Counter from './Counter';

const ItemDetail = ({item})=>{
    const [showButton, setShowButton] = useState(false);
    const {addToCart, cart}=useContext(CartContext)

    const onAdd = (cantidad) =>{
        //console.log(cantidad);
        setShowButton(true);
        addToCart(cantidad, item)
    };                                                       
    
    return(
        <div className="item-detail">
            <img src={item.pictureUrl} alt="Imagen del Producto"/>
            <div className="right-column">
                <div className="details">
                    <h1>{item.title}</h1>
                    <p className="pice">USD {item.price}</p>
                    <p className="description">{item.description}</p>
                </div>
               
                {
                 showButton ? 
                   (<Link to="/cart">Ir al Carrito</Link>) : 
                   (<Counter stock={5} initial={1} onAdd={onAdd}/>)
                    
                }
               
                
                
            </div>
        </div>
    )
}
export default ItemDetail;