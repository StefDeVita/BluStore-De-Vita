import React from 'react'
import carrito from "../img/carrito.png"

export default function CartWidget() {
    return (
        <div>
            <button id="carrito"><img id="imagenCarrito" className="img-fluid rounded" src={carrito} alt="carrito" /></button>
        </div>
    )
}
