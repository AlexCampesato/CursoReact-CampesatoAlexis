
import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../context/CartContext";
import './CartWidget.css';
import CarritoImagen from './carrito.svg'

const Cartwidget=() =>{

    const {cart, cantidadTotal}=useContext(CartContext);
    const [isCartEmpty, setIsCartEmpty] = useState(true)


    useEffect(() => {
        if (cart.length > 0) {
        setIsCartEmpty(false)
        }
    }, [cart]);

    if (isCartEmpty) {
        return (<img src=""/>
              )
    } else {
        const cantidadTotal = cart.reduce((acc, item)=>(acc += item.cantidad),0)
        return (
           <>
        <img src={CarritoImagen} alt="Carrito" class='Carrito' />
        <h4 className="cantidad-cart">{cantidadTotal}</h4>
        </>)

    
}};

export default Cartwidget;
