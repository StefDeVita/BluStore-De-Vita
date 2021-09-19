import React,{useState,useEffect} from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';


const ItemsCategoria = (props) => {
    const[items,setItems] = useState([]);
    const[cargando,setCargando] = useState(false);
    const {categoria} = useParams();
    console.log(categoria)
    useEffect(() =>{
        setCargando(true);
        fetch(`http://localhost:3001/productos?categoryid=${categoria}`)
        .then((response) => response.json())
        .then((data)=> setItems(data))
        
        .catch((error) => console.log("ha habido un error"))
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