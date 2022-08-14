import React from 'react';
import './NavBar.css';

import Cartwidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
return (<div>
    <a href="imagenes/logopino.jpg"></a>
    <ul className='ul-nav'>
        
        <Link to="/" style={{ textDecoration: 'none'}}><li className='nav-title'>PINO BLANCO</li></Link>
        <Link to="/category/moderno" style={{ textDecoration: 'none'}}><li className='nav-title'>Moderno</li></Link>
        <Link to="/category/antiguo" style={{ textDecoration: 'none'}}><li className='nav-title'>Antiguo</li></Link>
        <Link to="/category/industrial" style={{ textDecoration: 'none'}}><li className='nav-title'>Industrial</li></Link>
        
        <Link to="/item/add"><li><button className='btn-item'>Agregar item</button></li></Link>
        <Link to="/cart"><li ><Cartwidget /></li></Link>
    </ul>
    <section></section>
    
    </div>
);
}