import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-4 h-6 bg-amber-700 rounded-full transform rotate-12"></div>
            <div className="w-4 h-6 bg-amber-800 rounded-full transform -rotate-12"></div>
          </div>
          <span className="text-2xl font-bold text-amber-800">wildlife.co</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
          >
            Registration
          </a>
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-4 py-2 bg-amber-100 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-800 placeholder-amber-600"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Icon name="Search" size={20} className="text-amber-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
