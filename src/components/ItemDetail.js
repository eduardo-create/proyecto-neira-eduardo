import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";

function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCartList } = useCartContext();

  const addToCart = (quantityAdded) => {
    setQuantity(quantityAdded);
    addToCartList({ quantity: quantityAdded });
  };

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img className="img-fluid" src={product.image} alt={product.name} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <p className="card-title fw-bold fs-2 d-inline">{product.name}</p>
              <p className="fw-bold fs-3 text-success d-lg-inline d-sm-inline float-lg-end float-sm-end">
                $ {product.price}
              </p>
              <p className="text-muted">
                Cantidad disponible {product.quantity}
              </p>
              <p className="card-text">{product.description}</p>
              <ItemCount
                initial={quantity}
                stock={product.quantity}
                id={product.name}
                addToCart={addToCart}
              />
              <button className="btn btn-success mt-3">
                <Link className="nav-link w-100" to="/cart">
                  Ir al carrito
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
