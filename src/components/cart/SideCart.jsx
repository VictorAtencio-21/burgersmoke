import React from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";

const SideCart = ({
  cart = [],
  updateQuantity = () => {},
  getTotalPrice = () => {},
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-4 right-4 p-4">
          <ShoppingCart className="mr-2" />
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Review your order before checkout</SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.dish.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.selectedIngredients
                    .map(
                      (id) =>
                        item.dish.ingredients.find((i) => i.id === id)?.name
                    )
                    .join(", ")}
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(index, -1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(index, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          {cart.length > 0 ? (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
