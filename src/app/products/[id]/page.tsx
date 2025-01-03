"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getData = async () => {
      const { data }: { data: Product[] } = (await axios.get("/api/product")).data;
      const finalData = data.filter((val) => val.id.toString() === params.id)[0];
      setProduct(finalData);
    };
    getData();
  }, []);

  const addToCart = () => {
    if (typeof window !== "undefined") {
      let data = localStorage.getItem("cartData");
      if (!data) {
        localStorage.setItem("cartData", "[]");
        data = "[]";
      }
      const cartArray = JSON.parse(data);
      const myProducts: Product = product!;
      cartArray.push(myProducts);
      localStorage.setItem("cartData", JSON.stringify(cartArray));
    }
  };

  if (product)
    return (
      <div className="flex flex-col items-center p-4 max-w-screen-lg mx-auto">
        <img
          src={product.img}
          alt={product.name}
          className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 mb-6 rounded-md border border-red-950"
        />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-center font-dancing underline underline-offset-4">
          {product.name}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-10 text-center">
          Price: {product.price}
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-center font-dancing">
          Description
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10 text-center max-w-2xl">
          {product.description}
        </p>
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white px-4 sm:px-5 md:px-6 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    );

  return null;
};

export default Page;




