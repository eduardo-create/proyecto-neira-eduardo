// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App(props) {
  return (
      <>
        <NavBar />
        <h1 className="text-center pt-4">Nuestros Productos</h1>
        <ItemListContainer value="2"/>
      </>
  );
}

export default App;
