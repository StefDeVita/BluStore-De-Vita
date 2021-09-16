import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
