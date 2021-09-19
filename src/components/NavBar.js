import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-light">
            <Link to ="/"><h2 className="navbar-brand">Blu-Store</h2></Link>
            <Link className="nav-item" to="/">Inicio</Link>
            <a className="nav-item" href="">Productos</a>
            <a className="nav-item" href="">Acerca de</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar

