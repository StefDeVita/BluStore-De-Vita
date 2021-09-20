import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const [producto,setProducto] = useState({})
    const [cantidadAComprar, setCantidadAComprar] = useState(1);
    const {id} = useParams();
    const updateCantidad = (nuevoValor) =>{
        setCantidadAComprar(nuevoValor)
    }
    useEffect(()=>{
        fetch(`http://localhost:3001/productos/${id}`)
        .then((response)=>response.json())
        .then((data)=> setProducto(data))
        .catch((error)=>console.log("ha habido un error"));
    },[id])
    
    return (
        <div className="flex">
            <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={producto.imagen}
            className="card-img item-detail-image"
            alt={producto.nombre}
          />
        </div>
        <div className="col-md-8">
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
                <button className="btn item-detail-button-comprar">
                    Agregar {cantidadAComprar}
                </button>
            </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default ItemDetail;