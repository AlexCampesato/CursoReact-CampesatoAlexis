import React from 'react';
import './NavBar.css';

import Cartwidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
return (<div>
    <a href="imagenes/logopino.jpg"></a>
    <ul className='ul-nav'>
        
        <Link to="/" style={{ textDecoration: 'none'}}><li className='nav-title'>PINO BLANCO</li></Link>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
        <Link to="/cart"><li><Cartwidget /></li></Link>
    </ul>
    <section></section>
    
    </div>
);
}