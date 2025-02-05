"use client";
import { useCart } from "../providers/CartProvider";
import MenuItem from "@/components/menu/MenuItem";
import DishModal from "@/components/menu/DishModal";
import SideCart from "@/components/cart/SideCart";

export default function Menu({ menu = [] }) {
  const { selectedDish, openDishModal, closeDishModal, addToCart } = useCart(); // Get everything from the provider

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
    </div>
  );
}
