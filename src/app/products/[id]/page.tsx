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
      <div className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={product.img} alt={product.name} className="w-3/4 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-lg font-bold">Price: {product.price}</p>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );

  return null;
};

export default Page;
