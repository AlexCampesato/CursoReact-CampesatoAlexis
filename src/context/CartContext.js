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

    const deleteItem = (id) => {

        const copy = [...cart]
        
        const filterItem = copy.filter(item => item.id !== id)
        
        setCart(filterItem)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito, deleteItem}}>
            {children}
        </CartContext.Provider>
    );

};

export default CartContextProvider;