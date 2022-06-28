import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

const Cart=() =>{

    const {cart, vaciarCarrito}=useContext(CartContext);
    console.log(cart)

    return (
    <>
        {cart.map((producto) => (
            <div key={producto.id}>
                <h2>{producto.title}</h2>
                <h3>Usted llevara: {producto.cantidad} unidades</h3>
                
            </div>
        ))}
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </>
    )
};

export default Cart;