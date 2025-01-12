"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
}

const Page = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams(); 
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data }: { data: Product[] } = (await axios.get("/api/product")).data;
        const finalData = data.find((val) => val.id.toString() === params.id); 
        setProduct(finalData || null);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    getData();
  }, [params.id]);

  const addToCart = () => {
    if (typeof window !== "undefined") {
      let data = localStorage.getItem("cartData");
      if (!data) {
        localStorage.setItem("cartData", "[]");
        data = "[]";
      }
      const cartArray = JSON.parse(data);
      if (product) {
        cartArray.push(product);
        localStorage.setItem("cartData", JSON.stringify(cartArray));

        console.log("Cart Updated:", cartArray);

        router.push("/cart");
      }
    }
  };

  if (product)
    return (
      <div className="flex flex-col items-center p-4 max-w-screen-lg mx-auto">
        <Image
          src={product.img}
          alt={product.name}
          width={1000}
          height={1000}
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
          className="bg-pink-300 text-black font-bold px-4 sm:px-5 md:px-6 py-2 rounded hover:bg-orange-300"
        >
          Add to Cart
        </button>
      </div>
    );

  return null;
};

export default Page;







