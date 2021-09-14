import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
