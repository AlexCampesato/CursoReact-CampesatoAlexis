import React, { useState } from 'react';
import './CartWidget.css';
import CarritoImagen from './carrito.svg'

export default function Cartwidget() {
    
    return (
        <img src={CarritoImagen} alt="Carrito" class='Carrito' />
       
    );
    }
    
