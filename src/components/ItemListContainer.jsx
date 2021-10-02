import React, {useState,useEffect} from 'react';
import ItemList from './ItemList'
import {getFirestore} from '../firebase/index'

const ItemListContainer = () => {
  const [productos,setProductos] = useState([]);  
  useEffect(()=>{
    const db = getFirestore();
    const coleccionProductos = db.collection('productos');
    coleccionProductos.get()
    .then((querySnapshot) =>{
      if(querySnapshot.empty){
        console.log("No hay productos")
      }else{
        setProductos(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })));
      }
    })
    .catch((error)=>{
      console.log("Error cargando productos",error)
    });
  },[])
  
  return (
          <ItemList productos={productos}/>
        
    );
};



export default ItemListContainer;