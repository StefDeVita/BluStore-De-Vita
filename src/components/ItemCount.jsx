import React, { useState } from 'react';

const ItemCount = props => {
    const [number,setNumber] = useState(props.initial);
    const sumarcontador = () =>{
        if(number >= props.stock ){
            return;
        }
        else{
            setNumber(number+1);
            props.onAdd(number + 1)
        }
    }
    const restarcontador = () =>{
        if(number <= props.initial){
            return;
        }
        else{
            setNumber(number-1);
            props.onAdd(number - 1);
        }
    }
    return (
        
        <div className="card flex-center" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Elija la cantidad a Añadir</h5>
                <p className="card-text">Deseo agregar esta cantidad al carrito</p>
                <div className="card-text">{number}</div>
                <a onClick={restarcontador} href="#" className="btn btn-primary">-</a>

                <a onClick={sumarcontador} href="#" className="btn btn-primary">+</a>
            </div>
        </div>
        
    );
};

export default ItemCount;