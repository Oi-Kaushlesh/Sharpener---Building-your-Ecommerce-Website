import React, { useState } from "react";

const AuthContext = React.createContext({
  cartElements: [],
  addToCartHandler: (item) => {},
  removeFromCartHandler: (item) => {},
});

export const AuthContextProvider = (props) => {
  const [cartElements, setCartElements] = useState([]);

  const addToCartHandler = (item) => {
    setCartElements((prevCartElements) => {
      const existingItemIndex = prevCartElements.findIndex(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCartElements];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCartElements, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCartHandler = (item) => {
    setCartElements((prevCartElements) => {
      const existingItemIndex = prevCartElements.findIndex(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCartElements];
        const updatedItem = updatedCart[existingItemIndex];
        if (updatedItem.quantity > 1) {
          updatedItem.quantity -= 1;
          updatedCart[existingItemIndex] = updatedItem;
        } else {
          updatedCart.splice(existingItemIndex, 1);
        }
        return updatedCart;
      }
      return prevCartElements;
    });
  };

  return (
    <AuthContext.Provider
      value={{ cartElements, addToCartHandler, removeFromCartHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
