import { React, useEffect, useState } from "react";


export default function ItemCount({stock,initial,onAdd}) {
    const [contador, setContador] = useState(1);

    useEffect(function(){}, [stock]);
    useEffect(function(){}, [initial]);
    onAdd=contador

        function aumentarStock() {
        if(contador<stock){
        setContador(contador + 1)
        }}

        function restarStock() {
           if(contador>initial){
            setContador(contador - 1)
        }}

        function onAddd(){
            console.log("Se compro" + onAdd + "sillas")
        }
    
    return(
        <div>
            <h1>Contador</h1>
            <button onClick={aumentarStock}>+</button>
            <button onClick={restarStock}>-</button>
            <button onClick={onAddd}>Comprar</button>
            <p>{contador}</p>
            
        </div>

    );

}