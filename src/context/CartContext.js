import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({children}) =>  {
    const [cart, setCart] = useState([]);

    const addToCart = (cantidad, item)=>{
        if(isOnCart(item.id)){
            alert('Ya esta en el carrito')

        } else{
            setCart([...cart, {...item, cantidad}])
        }
    };

    const isOnCart = (id) => {
        const respuesta = cart.some((prod) =>prod.id===id);
        return respuesta;
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    );

};

export default CartContextProvider;