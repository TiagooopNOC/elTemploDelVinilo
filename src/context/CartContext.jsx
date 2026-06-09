/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    setCart((currentCart) => {
      if (currentCart.some((prod) => prod.id === item.id)) {
        return currentCart.map((prod) => {
          if (prod.id === item.id) {
            const newQuantity = prod.quantity + qty;
            return {
              ...prod,
              quantity: newQuantity > prod.stock ? prod.stock : newQuantity,
            };
          } else {
            return prod;
          }
        });
      }

      return [...currentCart, { ...item, quantity: qty }];
    });
  };

  const clear = () => setCart([]);

  const removeItem = (id) => {
    setCart((currentCart) => currentCart.filter((prod) => prod.id !== id));
  };

  const increaseItem = (id) => {
    setCart((currentCart) =>
      currentCart.map((prod) => {
        if (prod.id === id && prod.quantity < prod.stock) {
          return { ...prod, quantity: prod.quantity + 1 };
        } else {
          return prod;
        }
      }),
    );
  };

  const decreaseItem = (id) => {
    setCart((currentCart) =>
      currentCart.map((prod) => {
        if (prod.id === id && prod.quantity !== 1) {
          return { ...prod, quantity: prod.quantity - 1 };
        } else {
          return prod;
        }
      }),
    );
  };

  const inCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const total = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);
  };

  const totalImp = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 1.5);
  };

  const totalQty = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        removeItem,
        increaseItem,
        decreaseItem,
        inCart,
        total,
        totalImp,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
