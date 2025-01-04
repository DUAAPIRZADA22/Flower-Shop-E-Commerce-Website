import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    name: 'Daisy Cuze',
    profession: 'Housekeeper',
    comment: 'Great service, delivery, price and product! Quality of flowers are amazing. Will be using your for all my flower needs.',
    image: '/images/ts1.jpeg',
  },
  {
    name: 'Jane Smith',
    profession: 'Musician',
    comment: 'A very special thanks. Flawless bouquets with very beautiful flowers with nice arrangement and wrapping. I Love it.',
    image: '/images/ts2.jpeg',
  },
  {
    name: 'Alex Brown',
    profession: 'Architect',
    comment: 'Such great service! I will definitely come back again for more.Items received accordingly as shown. Thank you so much for timely delivery.',
    image: '/images/ts3.jpeg',
  },
];

const Clients = () => {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl text-gray-500 py-4">Testimonial</h2>
      <h1 className="text-6xl font-bold mb-6 font-dancing">What Clients Say</h1>

    
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg max-w-xs w-full sm:w-auto">
            <p className="mb-4">&quot;{testimonial.comment}&quot;</p>
            <div className="flex justify-center items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden">
                <Image src={testimonial.image} alt={testimonial.name} width={1000} height={1000} className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="mt-4 font-bold text-3xl font-dancing">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
