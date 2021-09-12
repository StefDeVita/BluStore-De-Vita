import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Juan"/>
      <ItemCount stock = {5} initial = {1} onAdd = {""}/>
      
    </div>
  );
}

export default App;
