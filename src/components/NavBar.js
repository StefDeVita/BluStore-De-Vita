import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-light">
            <Link to ="/"><h2 className="navbar-brand">Blu-Store</h2></Link>
            <Link className="nav-item" to="/">Inicio</Link>
            <Link className="nav-item" to="/category/0">Productos Digitales</Link>
            <Link className="nav-item" to="/category/1">Productos Fisicos</Link>
            <CartWidget/>
        </nav>
    )
}

export default NavBar

