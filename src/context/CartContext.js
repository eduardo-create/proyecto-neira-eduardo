import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCartList = (productAdd) => {
    const findProduct = cart.find(
      (productInCart) => productInCart.id === productAdd.itemDetail.id
    );
    if (findProduct) {
      findProduct.quantity = productAdd.quantity + findProduct.quantity;
      setCart(cart);
    } else {
      setCart([...cart, productAdd]);
    }
  };

  const removeItem = (productRemove) => {
    setCart(
      cart.filter((productInCart) => productInCart.id !== productRemove.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCartList, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
