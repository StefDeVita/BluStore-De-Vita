import { useContext } from "react";
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext';
import CartItem from './CartItem'

const Cart = () => {
  const contexto = useContext(CartContext);
  if (contexto.items.length === 0) {
    return(
    <div className="d-flex container justify-content-center"> 
    <Link className="carrito-vacio" to="/">El carrito esta vacio, volver a Inicio</Link>
    </div>)
  } else {
    return (
      <>
        <div className="container d-flex">
          {contexto.items.map((item, indice) => {
            return <CartItem item={item} key={indice} />;
          })}
        </div>
        <div className="container">
          <h3 id="total">Total de la compra: ${contexto.precio}</h3>
          <button className="btn">
              Comprar Ahora
          </button>
          <button className="btn" onClick= {contexto.borrar}>
              Limpiar Carrito
          </button>
         
        </div>
      </>
    );
  }
};
export default Cart;