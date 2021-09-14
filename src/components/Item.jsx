import React from 'react';


const Item = ({producto}) => {
    return (
        
    <div className="col mb-5">
        <div className="card">
            <img className="card-img-top img-fluid" src={producto.imagen} alt={producto.nombre}/>
            <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.precio}</p>
        </div>
    
        <div className="card-body text-center">
        <button className="btn">Agregar al carrito</button>
        </div>
    </div>
    </div>
        
    );
};



export default Item;