import React from "react";

const page = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <blockquote className="text-xl italic font-semibold leading-relaxed">
            "Flowers are not just a display of beauty; they are a silent
            language of emotions. Each bloom speaks a different story, carrying
            whispers of love, friendship, and joy. They connect us to nature,
            bring peace to our hearts, and remind us of life&apos;s fleeting,
            delicate moments."
          </blockquote>
          <hr className="border-gray-400 w-1/4 mt-2" />
          <p className="text-sm text-gray-600 mt-2">- Edwin Curran</p>
        </div>
  
               <div className="md:w-1/2">
          <a href="#">
            <img
              src="/images/abt.jpeg"
              alt="Flower Image"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-16 py-16">
        <h1 className="text-5xl font-bold font-dancing">
          BETTER FLOWERS. LOWER PRICES !
        </h1>
        <h2 className="text-2xl font-semibold font-dancing py-4">
          Put A Smile On Their Face And Show That You Care
        </h2>
        <p className="mt-4 text-gray-700 mb-12">
          Welcome to our flower shop, where every petal tells a story. We bring
          nature&apos;s beauty to your doorstep with a variety of flowers for every
          occasion.
        </p>
      </div>
    </div>
  );
};

export default page;

