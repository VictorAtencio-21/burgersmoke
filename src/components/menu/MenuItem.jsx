import { Button } from "@/components/ui/button";

export default function MenuItem({ dish, openDishModal }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{dish.name}</h2>
      <p className="text-gray-600 mb-4">{dish.description}</p>
      <p className="text-lg font-bold mb-4">${dish.price.toFixed(2)}</p>
      <Button onClick={() => openDishModal(dish)}>
        Personalizar y Añadir al Carrito
      </Button>
    </div>
  );
}
