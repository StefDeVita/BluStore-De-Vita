import React,{useContext} from 'react'
import carrito from "../img/carrito.png"
import {CartContext} from '../context/CartContext';


export default function CartWidget() {
    const contexto = useContext(CartContext);
    return (
        <div>
            <button id="carrito">
                <span className="badge badge-primary">{contexto.cantidad}</span>
                <img id="imagenCarrito" className="img-fluid rounded" src={carrito} alt="carrito" />
                
            </button>
        </div>
    )
}
