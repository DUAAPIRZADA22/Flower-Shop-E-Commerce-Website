import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const page = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-14">
        <h1 className="text-6xl font-bold font-dancing">CONTACT</h1>
        <h2 className="text-gray-500 mt-2">Home / Contact</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex flex-col items-center text-center mb-8">
            <FiPhone className="text-3xl hover:text-pink-300 transition-colors" />
            <h3 className="text-3xl font-semibold mt-4 font-dancing">Phone</h3>
            <p className="text-gray-600 mt-2">+1-123-456-7890</p>
          </div>
          <div className="flex flex-col items-center text-center mb-8">
            <FiMail className="text-3xl hover:text-pink-300 transition-colors" />
            <h3 className="text-3xl font-semibold mt-4 font-dancing">Email</h3>
            <p className="text-gray-600 mt-2">example@gmail.com</p>
          </div>
          <div className="flex flex-col items-center text-center mb-8">
            <FiMapPin className="text-3xl hover:text-pink-300 transition-colors" />
            <h3 className="text-3xl font-semibold mt-4 font-dancing">
              Address
            </h3>
            <p className="text-gray-600 mt-2">123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-6 text-center font-dancing">
              Contact Us
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
