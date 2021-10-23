// import logo from './logo.svg';
import './App.css';
// import { ItemCount } from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer value="2" />
      {/* <ItemCount stock={5} initial={1} /> */}
    </div>
  );
}

export default App;
