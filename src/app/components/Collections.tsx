import React from "react";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Choose Flowers",
      description:
        "Browse through our wide selection of vibrant and fresh flowers.",
    },
    {
      id: 2,
      title: "Place An Order",
      description:
        "Simply choose the quantity and delivery details, and we'll take care of the rest.",
    },
    {
      id: 3,
      title: "Get Plants Delivered",
      description:
        "Enjoy the convenience of having your plants delivered directly to your doorstep.",
    },
  ];

  return (
    <div className="text-center py-24">
      <h2 className="text-gray-500 text-2xl">Order Now</h2>
      <h1 className="font-bold text-6xl mt-4 font-dancing">Our Collections</h1>
      <p className="mt-2 text-lg text-gray-500">
        Blossoms live in every color and aroma.
        <br /> Beautifully share your emotions with our garden flowers.
      </p>

      <div className="flex flex-col md:flex-row justify-center mt-8 px-6">
        <div className="w-full md:w-1/2 h-[450px] bg-gray-300 mb-6 md:mb-0">
          <img
            src="/images/f1.jpg"
            alt="Collection"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 text-left pl-8 py-12">
          {collections.map((collection) => (
            <div key={collection.id} className="mb-8">
              <h1 className="font-bold text-3xl font-dancing cursor-pointer">
                {collection.title}
              </h1>
              <p className="mt-2 text-gray-500">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
