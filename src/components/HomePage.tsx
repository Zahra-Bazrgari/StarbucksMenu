import React, { useState } from "react";
import { CoffeeItem } from "../types/types";
import { data } from "../assets/data";
import CardGenerator from "./CardGenerator";
import CartIcon from "../assets/Icons/CartIcon";
import CartModal from "./CartModal";

const HomePage: React.FC = () => {
  const [coffeeItems, setCoffeeItems] = React.useState<CoffeeItem[]>(data);
  const [cartOpen, setCartOpen] = useState(false);

  const incrementQuantity = (name: string) => {
    setCoffeeItems((prevState) =>
      prevState.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (name: string) => {
    setCoffeeItems((prevState) =>
      prevState.map((item) =>
        item.name === name && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalQuantity = coffeeItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = coffeeItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    setCoffeeItems((prevItems) =>
      prevItems.map((item) => ({ ...item, quantity: 0 }))
    );
  };

  return (
    <div className="flex-col p-5 min-h-screen container mx-auto">
      <div className="flex justify-end relative mt-2 mr-3">
        <CartIcon onOpen={() => setCartOpen(true)} />
        {totalQuantity > 0 && (
          <div className="absolute text-white bg-black rounded-full px-2 -right-2 -top-2">
            {totalQuantity}
          </div>
        )}
      </div>
      <div className="flex gap-3 items-center justify-center">
        <img src="src/assets/logo.png" alt="Logo" />
        <h1 className="text-3xl md:text-5xl font-bold">Starbucks</h1>
      </div>

      <p className="text-2xl font-semibold my-3 text-center">
        Starbucks Online Coffee Order
      </p>

      <div className="absolute top-14 right-16 flex items-center justify-center"></div>

      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5 p-5">
        {coffeeItems.map((item: CoffeeItem) => (
          <CardGenerator
            key={item.name}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </div>

      {cartOpen && (
        <CartModal
          items={coffeeItems}
          totalPrice={totalPrice}
          onClose={() => setCartOpen(false)}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default HomePage;
