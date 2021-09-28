import { useContext } from "react";
import {CartContext} from '../context/CartContext';


const CartItem = (props) => {
  const { item, cantidad } = props.item;
  const contexto = useContext(CartContext);

  return (
    <div className="card">
      <div>
        <img className="img-fluid card-img-top"
          src={item.imagen}
          alt={item.nombre}
        />
      </div>
      <div className="card-body">
        <div className="card-title">{item.nombre}</div>
        <div>{item.descripcion}</div>
        <div className="card-body">
          Precio por unidad:{" "}
          <span className="card-text">${item.precio}</span> - Cantidad:{" "}
          <span className="card-text">{cantidad}</span> - Subtotal:{" "}
          <span className="card-text">${cantidad * item.precio}</span>
        </div>
      </div>
      <div className="card-body">
        <button className="btn"onClick={() => {contexto.eliminarItem(item.id);}}>Eliminar Item</button>
      </div>
    </div>
  );
};
export default CartItem