import React from 'react';
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
        <div className="contenedor">
            <ItemList productos={productos}/>
        </div>
    );
};


const productos = [
    {
      id: 0,
      nombre: " Halloween (1978) - Collector's Edition [4K UHD] [Blu-ray] ",
      descripcion: "Esta es la descripción del producto 1",
      precio: 10000,
      imagen: "https://m.media-amazon.com/images/I/81TzYGqfJjS._SY445_.jpg",
    },
    {
      id: 1,
      nombre: " F9: The Fast Saga - Director's Cut Blu-ray + DVD + Digital ",
      descripcion: "Esta es la descripción del producto 2",
      precio: 10001,
      imagen: "https://m.media-amazon.com/images/I/81oQdDUC5qL._SX342_.jpg",
    },
    {
      id: 2,
      nombre: " Inglourious Basterds - 4K Ultra HD + Blu-ray",
      descripcion: "Esta es la descripción del producto 3",
      precio: 10002,
      imagen: "https://m.media-amazon.com/images/I/71WjOpXmr7L._SX342_.jpg",
    },
    {
      id: 3,
      nombre: " Clockwork Orange, A (4K Ultra HD + Blu-ray) ",
      descripcion: "Esta es la descripción del producto 4",
      precio: 10003,
      imagen: "https://m.media-amazon.com/images/I/71bmy1kqPOL._SX342_.jpg",
    },
    {
      id: 4,
      nombre: " Godzilla vs. Kong (Blu-ray + DVD + Digital) ",
      descripcion: "Esta es la descripción del producto 5",
      precio: 10004,
      imagen: "https://m.media-amazon.com/images/I/81fxlwk4crS._SX342_.jpg",
    },
  ];
export default ItemListContainer;