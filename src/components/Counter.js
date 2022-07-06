import { React, useEffect, useState } from "react";


const Counter = ({stock,initial,onAdd}) => {
    const[itemCounter, setItemCounter]=useState(1);

    const sumar=() => {
        itemCounter<stock&& setItemCounter(itemCounter+1)}

    const restar=() => {
        itemCounter>initial&& setItemCounter(itemCounter-1)}

    const addToCart=() => {
            onAdd(itemCounter);
           
        }

    
    
    return(
        <div className="item-count-container">
            <div>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
                <p>{itemCounter}</p>
                
            </div>
            
            <button className={itemCounter===0 ? 'disabled' : 'add'}
            onClick={addToCart}
            disabled={itemCounter===0}>
            Agregar al carrito
            </button>
            
        </div>

    );

}

export default Counter;