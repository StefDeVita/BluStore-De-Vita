import React,{useState,useEffect,useContext} from 'react';
import {useParams,useHistory} from 'react-router-dom'
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';
import {getFirestore} from '../firebase/index'
import NotFound from './NotFound';


const ItemDetail = () => {
    const [producto,setProducto] = useState({});
    const contexto = useContext(CartContext);
    const [existe,setExiste] = useState(true);
    const [cantidadAComprar, setCantidadAComprar] = useState(1);
    const [loading,setLoading] = useState(false)
    const [agregado,setAgregado] = useState([]);
    const {id} = useParams();
    const history = useHistory();

    const comprar = () => {
      if(agregado.length !== 0){
        setAgregado([]);
      }
      setAgregado([producto,cantidadAComprar]);
      contexto.agregarItem(producto,cantidadAComprar);
      history.push("/cart");
    }
    const updateCantidad = (nuevoValor) => {
        setCantidadAComprar(nuevoValor)
    }
    useEffect(()=>{
        setLoading(true)  
        const db = getFirestore();
        const collection = db.collection('productos');
        const producto =collection.doc(id);
        
        producto.get()
        .then((doc)=>{
          if(!doc.exists){
            setExiste(false)
          }else{
            setProducto({id: doc.id, ...doc.data() })
          }
        })
        .catch((error)=>console.log("ha habido un error",error))
        .finally(setLoading(false));
    },[id]);
    if(!existe){
      return <NotFound/>
    }
    if(loading){
      return <p>Cargando productos...</p>
    }
    else{
      return (
        
        <div className="flex">
            <div className="row">
        <div className="col-2">
          <img
            src={producto.imagen}
            className="card-img img-fluid"
            alt={producto.nombre}
          />
        </div>
        <div className="col">
          <div className="card-body item-detail-card-description">
            <div className="item-detail-card-description-body">
              <h5 className="card-title item-detail-name">{producto.nombre}</h5>
              <p className="card-text item-detail-info">{producto.descripcion}</p>
              <p className="card-text item-detail-precio">Precio por unidad: ${producto.precio}</p>
            </div>
            <div id="cardfinal" className="item-detail-card-description-body d-flex">
              <ItemCount
                className="flex-center"
                initial={1}
                stock={producto.stock}
                onAdd={updateCantidad}
              />
              
            </div>
            <div id="botonaniadir" className="d-flex">
                <button onClick={comprar} className="btn item-detail-button-comprar">
                    Agregar {cantidadAComprar}
                </button>
            </div>
          </div>
        </div>
        </div>
        </div>
    );
}};

export default ItemDetail;