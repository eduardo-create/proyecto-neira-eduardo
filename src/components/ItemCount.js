import { useState } from "react";

export const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={increment}>
        +
      </button>
      <span className="p-5">{counter}</span>
      <button className="btn btn-primary" onClick={decrement}>
        -
      </button>
    </div>
  );
};
