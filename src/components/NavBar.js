import React from 'react';
import './NavBar.css';

import Cartwidget from './CartWidget';

export default function NavBar() {
return (<div>
    <a href="imagenes/logopino.jpg"></a>
    <ul>
        
        <li>PinoBlanco</li>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
        <Cartwidget />
    </ul>
    
    </div>
);
}