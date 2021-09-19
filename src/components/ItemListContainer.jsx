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
          <ItemList productos={productos}/>
        
    );
};



export default ItemListContainer;