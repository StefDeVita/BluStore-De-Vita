import Item from "./Item";
import { useState, useEffect } from "react";


const ItemList = ({productos}) => {
    const [cargando,setCargando] = useState(false)
    const [items,setItems] = useState([])
    
    useEffect(() => {
        const getProductos = () => {
            return new Promise((resolve) => {
                setTimeout(() =>{
                    resolve(productos);
                },200);
            })
        }
        setCargando(true);
        getProductos().then(result => setItems(result))
        .finally(() => setCargando(false));
    },[productos])
    
    return (
     <div className="row justify-content-around">
         {cargando && <p>Cargando productos...</p>}
         
         {items.map(producto =>(
             <Item key={producto.id} producto={producto}/>
         ))}
     </div>
    );
 }
 export default ItemList;