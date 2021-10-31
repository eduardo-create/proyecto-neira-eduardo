// import logo from './logo.svg';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart';




function App() {




  return (
    <Router>
      <div className="container-fluid">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/product/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
