import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export const CartWidget = () => {

  const { itemQuantity } = useCartContext();


  return (
    <NavLink to="/cart">
      <button className="btn btn-outline-success position-relative">
        <i className="bi bi-cart-plus"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {itemQuantity}
        </span>
      </button>
    </NavLink>
  );
};


export default CartWidget;
