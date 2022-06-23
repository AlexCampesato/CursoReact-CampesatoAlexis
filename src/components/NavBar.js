import React from 'react';
import './NavBar.css';

import Cartwidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
return (<div>
    <a href="imagenes/logopino.jpg"></a>
    <ul>
        
        <Link to="/"><li>PINO BLANCO</li></Link>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
        <Cartwidget />
    </ul>
    
    </div>
);
}