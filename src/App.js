// import logo from './logo.svg';
import './App.css';
// import ItemDetailContainer from './components/ItemDetailContainer';

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Cart from './views/Cart';
import CartContextProvider from './context/CartContext';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';




function App() {

  return (
    <CartContextProvider>
      <Router>
        <div className="container-fluid">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/product/category" component={ItemDetail} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;



