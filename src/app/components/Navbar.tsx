"use client"; // Mark this file as a client component

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/789872.jpg')" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          My Portfolio
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 md:items-center text-white`}
        >
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-blue-400">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
