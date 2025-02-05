"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => {},
  selectedDish: null,
  setSelectedDish: () => {},
  openDishModal: () => {},
  closeDishModal: () => {},
  addToCart: () => {},
  updateCartItemQuantity: () => {},
  getTotalPrice: () => 0,
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  const openDishModal = (dish) => {
    setSelectedDish(dish);
  };

  const closeDishModal = () => {
    setSelectedDish(null);
  };

  const addToCart = (dish, selectedIngredients) => {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.dish.id === dish.id &&
        JSON.stringify(item.selectedIngredients) ===
          JSON.stringify(selectedIngredients)
    );

    if (existingItemIndex > -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prev) => [
        ...prev,
        {
          dish,
          quantity: 1,
          selectedIngredients,
        },
      ]);
    }
  };

  const updateCartItemQuantity = (index, increment) => {
    const newCart = [...cart];
    newCart[index].quantity += increment;
    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.dish.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        selectedDish,
        setSelectedDish,
        openDishModal,
        closeDishModal,
        addToCart,
        updateCartItemQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
