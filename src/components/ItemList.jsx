import Item from "./Item";
import { useState, useEffect } from "react";


const ItemList = ({productos}) => {
    const [cargando,setCargando] = useState(false)
    const [items,setItems] = useState([])
    useEffect(() => {
        setCargando(true);
        getProductos().then(result => setItems(result))
        .finally(() => setCargando(false));
    },[])
    const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(productos);
            },2000);
        })
    }
    return (
     <div className="row">
         {cargando && <p>Cargando productos...</p>}
         
         {items.map(producto =>(
             <Item key={producto.id} producto={producto}/>
         ))}
     </div>
    );
 }
 export default ItemList;