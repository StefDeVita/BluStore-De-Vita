import React, { useState } from 'react';

const ItemCount = props => {
    const [number,setNumber] = useState(props.initial);
    const sumarcontador = () =>{
        if(number >= props.stock ){
            return;
        }
        else{
            setNumber(number+1);
        }
    }
    const restarcontador = () =>{
        if(number <= props.initial){
            return;
        }
        else{
            setNumber(number-1);
        }
    }
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Contador</h5>
                    <p className="card-text">Blu ray</p>
                    <div className="card-text">{number}</div>
                    <a onClick={sumarcontador} href="#" className="btn btn-primary">+</a>
                    <a onClick={restarcontador} href="#" className="btn btn-primary">-</a>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;