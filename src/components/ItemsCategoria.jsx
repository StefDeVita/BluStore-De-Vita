import React,{useState,useEffect} from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import {getFirestore} from '../firebase/index';


const ItemsCategoria = (props) => {
    const[items,setItems] = useState([]);
    const[cargando,setCargando] = useState(false);
    const {categoria} = useParams();
    console.log(categoria)
    useEffect(() =>{
        setCargando(true);
        const db = getFirestore();
        const collection = db.collection('productos');
        collection.get()
        .then((querySnapshot)=>{
          if(querySnapshot.empty){
            console.log("No hay productos")
          }else{
            const filtrados = querySnapshot.docs.filter((doc)=>doc.data().categoryid===categoria);
            const aAgregar = filtrados.map(((doc)=>({id: doc.id, ...doc.data() })));
            setItems(aAgregar);
          }
        })
        
        .catch((error) => console.log("ha habido un error",error))
        .finally(setCargando(false));
      },[categoria]);
      if(cargando){
        return(
        <div className="contenedor">
            <h4>Cargando...</h4>
        </div>)
      }
      return (
        
        <ItemList productos={items}/>
        
    );
};


export default ItemsCategoria;