import React from 'react';

const ItemListContainer = props => {
    return (
        <div className="contenedor">
            <p id="saludo">Hola {props.name}</p>
        </div>
    );
};



export default ItemListContainer;