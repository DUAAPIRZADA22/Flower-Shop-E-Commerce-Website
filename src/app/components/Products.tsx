
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLink, FaHeart, FaEye } from "react-icons/fa";
import Link from "next/link"; 

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/product");
        setProducts(data.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <p className="text-gray-500 text-2xl text-center mb-2">Best Gifts</p>
      <h2 className="text-6xl font-bold text-center mb-8 font-dancing">
        Our Shop Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-sm w-72 h-96 mx-auto flex flex-col items-center relative  transition-transform hover:scale-105 border-pink-600"
          >
            <div className="relative w-full h-56 bg-slate-300">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 flex justify-center items-end pb-2 space-x-4">
                <Link href={`/products/${product.id}`}>
                <span className="bg-white w-7 h-7 flex items-center justify-center rounded-full shadow-md">
                  <FaLink className="text-black text-lg" />
                </span>
                </Link>
                <span className="bg-white w-7 h-7 flex items-center justify-center rounded-full shadow-md">
                  <FaHeart className="text-black text-lg" />
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-bold font-dancing mb-2 py-2">
              {product.name}
            </h3>
            <p className="text-gray-700 text-lg mb-4">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

