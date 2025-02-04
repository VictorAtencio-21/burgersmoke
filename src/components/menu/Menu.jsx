"use client";
import { useState } from "react";
import MenuItem from "@/components/menu/MenuItem";
import DishModal from "@/components/menu/DishModal";
import SideCart from "@/components/cart/SideCart";

export default function Menu({ menu = [] }) {
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
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-3xl font-bold mb-8">Nuestro Menú</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menu.map((dish) => (
          <MenuItem key={dish.id} dish={dish} openDishModal={openDishModal} />
        ))}
      </div>

      {selectedDish && (
        <DishModal
          dish={selectedDish}
          closeModal={closeDishModal}
          addToCart={addToCart}
        />
      )}

      <SideCart
        cart={cart}
        updateQuantity={updateCartItemQuantity}
        getTotalPrice={getTotalPrice}
      />
    </div>
  );
}
