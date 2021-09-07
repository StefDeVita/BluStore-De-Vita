import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-light">
            <h2 className="navbar-brand">Blu-Store</h2>
            <a className="nav-item" href="">Inicio</a>
            <a className="nav-item" href="">Productos</a>
            <a className="nav-item" href="">Acerca de</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar

