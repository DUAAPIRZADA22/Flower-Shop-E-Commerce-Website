"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiFlowerLotusThin } from "react-icons/pi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-pink-100 shadow-md">
      <div className="flex items-center text-left">
        <PiFlowerLotusThin className="text-5xl text-pink-600 mr-2" />
        <h1 className="font-dancing text-4xl font-bold text-black">
          Bloom Cart
        </h1>
      </div>

      <div className="hidden md:flex gap-6 font-semibold">
        <Link href="/" className="text-black hover:text-pink-500 transition">
          Home
        </Link>
        <Link
          href="/about"
          className="text-black hover:text-pink-500 transition"
        >
          About
        </Link>
        <Link
          href="/products"
          className="text-black hover:text-pink-500 transition"
        >
          Products
        </Link>
        <Link
          href="/contact"
          className="text-black hover:text-pink-500 transition"
        >
          Contact Us
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <Link href="/cart">
          <MdOutlineShoppingBag className="text-2xl text-black cursor-pointer hover:text-pink-500 transition" />
        </Link>
        <Link href="/account">
          <RiAccountCircleLine className="text-2xl text-black cursor-pointer hover:text-pink-500 transition" />
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <HiX className="text-3xl text-black" />
          ) : (
            <HiOutlineMenuAlt3 className="text-3xl text-black" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-pink-200 shadow-lg flex flex-col items-center gap-4 py-4 z-50">
          <Link
            href="/"
            className="text-black hover:text-pink-500 transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-pink-500 transition"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-black hover:text-pink-500 transition"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-pink-500 transition"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <div className="flex gap-4">
            <MdOutlineShoppingBag className="text-2xl text-black cursor-pointer hover:text-pink-500 transition" />
            <RiAccountCircleLine className="text-2xl text-black cursor-pointer hover:text-pink-500 transition" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
