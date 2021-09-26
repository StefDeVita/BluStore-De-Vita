import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';
import ItemsCategoria from './components/ItemsCategoria';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:categoria" component={ItemsCategoria} />
        <Route exact path="/product/:id" component={ItemDetail}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
