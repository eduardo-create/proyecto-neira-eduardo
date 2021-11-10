import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';





export const ItemCount = ({ stock, initial, addToCart }) => {

  const [counter, setCounter] = useState(initial);
  console.log(initial);

  const MySwal = withReactContent(Swal);

  const increment = () => {
    counter >= stock
      ? MySwal.fire({
        title: 'No hay mas stock disponible',
        didOpeen: () => {
          MySwal.clickConfirm();
        }

      })
      : setCounter(counter + 1);
  };

  const decrement = () => {
    counter <= 1
      ? MySwal.fire({
        title: 'Tiene que agregar al menos un producto',
        didOpeen: () => {
          MySwal.clickConfirm();
        }
      })
      : setCounter(counter - 1);
  };

  const handleAddToCart = () => {
    addToCart(counter);
    setCounter(0);
  };

  return (
    <div className="container">
      <div className="col-12">


        <button className="btn btn-success" onClick={increment}>
          +
        </button>
        <span className="p-5">{counter}</span>
        <button className="btn btn-success" onClick={decrement}>
          -
        </button>
        <div className="pt-4">
          <button onClick={handleAddToCart} type="button" className="btn btn-success d-block w-100 fs-4">añadir <i className="bi bi-cart-plus"></i></button>
        </div>
      </div>
    </div>
  );
};
export default ItemCount;