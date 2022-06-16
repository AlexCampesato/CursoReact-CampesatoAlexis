import { useEffect } from "react";


export default function ItemList({products}){
    
    

    return (
        <div>

           {
                products.map(function(producto){
                    return(
                        <div key={producto.id}>
                            <img src={producto.pictureUrl} alt="Imagen del producto"/>
                            <p className="price">{producto.price}</p>
                            <p className="title">{producto.title}</p>
                        </div>
                    )
                })
            
                
            }
        </div>
    );
}