import React,{useContext,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {CartContext} from '../context/CartContext';
import {getFirestore} from '../firebase/index'
import NotFound from './NotFound'

const Checkout = () => {
    const {id} = useParams();
    const [loading,setLoading] = useState(false)
    const [existe,setExiste] = useState(true);
    const[orden,setOrden] = useState({name:"",surname:"",phone:"",items:[],date:{}})
    useEffect(()=>{
        setLoading(true)  
        const db = getFirestore();
        const collection = db.collection('orders');
        const order  = collection.doc(id);
        
        order.get()
        .then((doc)=>{
          if(!doc.exists){
            setExiste(false)
          }else{
            setOrden({id: doc.id, ...doc.data() })
          }
        })
        .catch((error)=>console.log("ha habido un error",error))
        .finally(setLoading(false));
    },[id]);
    if(!existe){
        <NotFound/>
    }
    if(loading){
        return(
            <div className="container">
                Cargando...
            </div>
        )
    }
    else{
        return (
    <>
        <h1>¡Muchas gracias por su compra!</h1>
        <div className="container">
            <h2>Resumen de su compra</h2>
            <h3>ID de la compra: {id}</h3>
            <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {orden.items.map((item)=>(
                    <tr>
                        <td>{item.item.nombre}</td>
                        <td>${item.item.precio}</td>
                        <td>{item.cantidad}</td>
                        <td>${item.cantidad * item.item.precio}</td>
                    </tr> 
                ))}
            </tbody>
            </table>
            </div>
            
        </div>
        <div className="container">
            <h3>Sus datos Personales</h3>
            <div className="container">
                <p>Nombre : {orden.name}</p>
                <p>Apellido : {orden.surname}</p>
                <p>Telefono: {orden.phone}</p>
            </div>
        </div>
    </>
    );
}
};



export default Checkout;