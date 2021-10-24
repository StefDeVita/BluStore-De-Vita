import { useContext,useState} from "react";
import {Link,useHistory} from 'react-router-dom'
import {CartContext} from '../context/CartContext';
import CartItem from './CartItem';
import {getFirestore} from '../firebase';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const Cart = () => {
  const contexto = useContext(CartContext);
  const [formState,setFormState] = useState({name:"",surname:"",phone:""})
  const history = useHistory()
  const crearOrden = () =>{
    const orden = {
      ...formState,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      items:contexto.items,
      total:contexto.precio,
    }
    const db = getFirestore();
    const ordersCollection = db.collection('orders');
    ordersCollection.add(orden)
    .then((docRef) => {
      history.push(`/checkout/${docRef.id}`)
      contexto.borrar()
    })
    .catch((error) => console.log(error));
  }
  
  const onSubmit = (e)=>{
    e.preventDefault();
    crearOrden()
    
  }
  const onInputChange = (e)=>{
    setFormState((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
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
          
          <button className="btn" onClick= {contexto.borrar}>
              Limpiar Carrito
          </button>
         
        </div>
        <form className="container" id="form" onSubmit={onSubmit}>
          <div className="form-group"> 
            <label htmlFor="name">
              Nombre
            </label>
            <input className="form-control" type="text" name="name" id="name" onChange={onInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="surname">
              Apellido
            </label>
            <input className="form-control" type="text" name="surname" id="surname" onChange={onInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Telefono
            </label>
            <input className="form-control" type="tel" id="phone" name="phone" onChange={onInputChange}/>
          </div>
          <button type="submit" disabled={!(formState.name !== "" && formState.surname!=="" && formState.phone !== "")} className="btn">
            Comprar Ahora
          </button>
        </form>
      </>
    );
  }
};
export default Cart;