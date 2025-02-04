import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function DishModal({ dish, closeModal, addToCart }) {
  const [selectedIngredients, setSelectedIngredients] = useState(
    dish.ingredients.filter((i) => i.default).map((i) => i.id)
  );

  const toggleIngredient = (ingredientId) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const handleAddToCart = () => {
    addToCart(dish, selectedIngredients);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{dish.name}</h2>
        <p className="mb-4">Selecciona tus ingredientes:</p>
        <div className="space-y-2 mb-6">
          {dish.ingredients.map((ingredient) => (
            <div key={ingredient.id} className="flex items-center">
              <Checkbox
                id={`ingredient-${ingredient.id}`}
                checked={selectedIngredients.includes(ingredient.id)}
                onCheckedChange={() => toggleIngredient(ingredient.id)}
              />
              <label htmlFor={`ingredient-${ingredient.id}`} className="ml-2">
                {ingredient.name}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button onClick={handleAddToCart}>Añadir al Carrito</Button>
        </div>
      </div>
    </div>
  );
}
