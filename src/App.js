// import logo from './logo.svg';
import './App.css';
import { ItemCount } from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-center pt-4">Nuestros Productos</h1>
      <ItemListContainer value="2" />
      <ItemCount stock={5} initial={1} />
    </>
  );
}

export default App;
