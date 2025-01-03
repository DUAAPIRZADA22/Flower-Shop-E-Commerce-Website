"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface ArrowProps {
  onClick: () => void;
}

const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-black text-5xl"
    onClick={onClick}
  >
    <RiArrowLeftSLine />
  </button>
);

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-black text-5xl"
    onClick={onClick}
  >
    <RiArrowRightSLine />
  </button>
);

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={false}
      infinite
      responsive={responsive}
      customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
      customRightArrow={<CustomRightArrow onClick={() => {}} />}
    >
      <div className="w-full h-screen relative">
        <Image
          src="/images/s1.jpg"
          alt="Slider 1"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <h1 className="text-7xl font-dancing font-bold mb-4">
            Find Your <br /> Own Happiness
          </h1>
          <p className="text-lg mb-6 max-w-xl text-gray-500">
            The best gifts for those you love. Fresh flower delivery daily and
            around the clock.
          </p>
          <button className="bg-slate-400 text-black px-6 py-2 font-semibold mb-6 hover:bg-pink-300 transition">
            Shop Now
          </button>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-pink-300 text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 bg-pink-300 text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 bg-pink-300 text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen relative">
        <Image
          src="/images/s2.jpg"
          alt="Slider 2"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-7xl font-dancing font-bold mb-4">
              Floral Gala
            </h1>
            <p className="text-lg mb-6 max-w-xl text-gray-500">
              The best gifts for those you love. Fresh flower delivery daily and
              around the clock.
            </p>
            <button className="bg-black text-white px-6 py-2 font-semibold mb-6 hover:bg-pink-300 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
