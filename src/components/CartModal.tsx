import React, { useState, useEffect } from "react";

import { CoffeeItem } from "../types/types";

import CloseIcon from "../assets/Icons/CloseIcon";
import CheckMarkSetUp from "../assets/Icons/CheckMarkSetUp";

interface ICartModal {
  items: CoffeeItem[];
  totalPrice: number;
  onClose: () => void;
  clearCart: () => void;
}

const CartModal: React.FC<ICartModal> = ({
  items,
  totalPrice,
  onClose,
  clearCart,
}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (totalPrice > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [totalPrice]);

  const handleSubmit = () => {
    const order = {
      items: items.filter((item) => item.quantity > 0),
      totalPrice,
      date: new Date().toISOString(),
    };

    localStorage.setItem("order", JSON.stringify(order));

    clearCart();

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <CloseIcon onClose={onClose} />

        {isSubmitted ? (
          <div className="flex-col items-center justify-center gap-2">
              <CheckMarkSetUp />
            <h2 className="text-2xl font-semibold my-5 text-center">
              Order submitted successfully!
            </h2>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Your Cart
            </h2>
            <ul>
              {items
                .filter((item) => item.quantity > 0)
                .map((item) => (
                  <li key={item.name} className="flex justify-between mb-2">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              {totalPrice > 0 ? (
                <>
                  <span className="font-bold">Total:</span>
                  <span className="text-lg">${totalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-gray-500 italic text-center">
                  Your cart is empty
                </span>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className={`mt-6 w-full px-4 py-2 rounded ${
                isEmpty
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-500 text-white"
              }`}
              disabled={isEmpty}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
