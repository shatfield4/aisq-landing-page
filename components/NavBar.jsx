import React from "react";

const NavBar = () => (
<header className="bg-gray-900 w-full shadow-lg">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <a href="#" className="font-bold text-xl text-white">
            Aisq
          </a>
          <div className="flex items-center">
            <a
              href="#"
              className="px-4 py-2 text-white hover:bg-indigo-500 hover:text-gray-100 rounded-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-400 hover:text-indigo-500 rounded-lg"
            >
              Features
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-400 hover:text-indigo-500 rounded-lg"
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-400 hover:text-indigo-500 rounded-lg"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
)

export default NavBar;

