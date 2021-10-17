import { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);
  const [cart, setCart] = useState(initial);

  const increment = () => {
    counter >= stock
      ? alert("no hay mas stock disponible")
      : setCounter(counter + 1);
  };

  const decrement = () => {
    counter <= initial
      ? alert("tu carrito no puede estar vacio")
      : setCounter(counter - 1);
  };

  return (
    <div className="container">
      <div className="col-3">
        <h4>tu carrito {cart}</h4>

        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
        <span className="p-5">{counter}</span>
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <button
          className="btn btn-primary d-flex mt-2"
          onClick={() => {
            setCart(counter);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
