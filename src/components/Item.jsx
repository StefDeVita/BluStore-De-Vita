import React from 'react';
import {Link} from "react-router-dom"


const Item = ({producto}) => {
    return (
        
    <div className="col mb-5">
        <div className="card">
            <Link to={`/product/${producto.id}`}><img className="card-img-top img-fluid" src={producto.imagen} alt={producto.nombre}/></Link>
            <div className="card-body">
            <Link to={`/product/${producto.id}`}><h5 className="card-title">{producto.nombre}</h5></Link>
            <p className="card-text">{`$${producto.precio}`}</p>
        </div>
    
        <div className="card-body text-center">
        </div>
    </div>
    </div>
        
    );
};



export default Item;