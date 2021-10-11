import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';
import ItemsCategoria from './components/ItemsCategoria';
import Cart from './components/Cart';
import CartProvider from './context/CartContext'
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/blustore-de-vita" component={ItemListContainer} />
          <Route exact path="/category/:categoria" component={ItemsCategoria} />
          <Route exact path="/product/:id" component={ItemDetail}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout/:id" component={Checkout}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
