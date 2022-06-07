import { React, useState } from "react";


export default function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial);

        function aumentarStock() {
            if(contador < stock){
        setContador(contador + 1)
        }}
        function restarStock() {
            if (contador > initial){
            setContador(contador - 1)
        }}
    
    return(
        <div>
            <h1>Contador</h1>
            <button onClick={aumentarStock}>+</button>
            <button onClick={restarStock}>-</button>
            <p>{contador}</p>
        </div>
    );

}