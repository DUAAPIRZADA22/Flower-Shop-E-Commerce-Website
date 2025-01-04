"use client";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const priceAsNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return !isNaN(priceAsNumber) ? total + priceAsNumber : total;
    }, 0);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto min-h-screen flex flex-col">
      <h1 className="text-5xl sm:text-4xl md:text-5xl mb-6 text-center font-dancing">
        YOUR CART
      </h1>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border p-4 rounded-md mb-4 shadow-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-1/3 sm:w-1/5 rounded-md"
            />
            <div className="text-center mt-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p>{item.description}</p>
              <p className="font-semibold">Price: {item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-pink-500 text-white font-bold px-4 py-2 rounded mt-4 hover:bg-black"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-center text-gray-500 text-lg sm:text-xl">
            Your cart is empty.
          </p>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-2xl font-semibold">Total Amount</h2>
          <p className="text-xl font-bold text-pink-600">{`$${calculateTotal().toFixed(2)}`}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;





