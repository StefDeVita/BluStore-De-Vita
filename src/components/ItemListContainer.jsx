import React, {useState,useEffect} from 'react';
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [productos,setProductos] = useState([]);  
  useEffect(() =>{
    fetch("http://localhost:3001/productos")
    .then((response) => response.json())
    .then((data)=> setProductos(data))
    
    .catch((error) => console.log("ha habido un error"))
  },[]);
  return (
        <div className="d-flex justify-content-around">
          <ItemList productos={productos}/>
        </div>
       
    );
};



export default ItemListContainer;