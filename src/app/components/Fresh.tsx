import Image from "next/image";
import React from "react";

const Fresh = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
      <div className="flex-1 space-y-4 md:pr-8 text-left">
        <h1 className="text-2xl text-gray-500 ">Best Gifts</h1>
        <h2 className="text-7xl font-bold font-dancing">
          From Our Garden <br /> To Your Table
        </h2>
        <p className="text-gray-700">
          Flowers are carefully selected and handpicked by expert florists to
          <br /> bring smiles and happiness.
        </p>
        <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-pink-300 transition gap-4">
          Shop Now
        </button>
      </div>

      <div className="flex-1 flex  py-8 transition-transform hover:scale-105">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/b1.jpeg"
            alt="Image 1"
            className="w-full object-cover rounded-md"
            layout="fixed"
            width={140}
            height={40} 
          />
          <Image
            src="/images/b2.jpeg"
            alt="Image 2"
            className="w-full object-cover rounded-md"
            layout="fixed"
            width={140}
            height={40} 
          />
        </div>

        <div className="ml-4">
          <Image
            src="/images/b3.jpeg"
            alt="Image 3"
            className="w-full h-auto object-cover rounded-md"
            layout="fixed"
            width={300}
            height={60} 
          />
        </div>
      </div>
    </div>
  );
};

export default Fresh;






