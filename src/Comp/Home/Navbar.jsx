import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Simple icons without lucide-react
const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'New Webseries', path: '/newweb' },
  { name: 'Stories', path: '/stories' },
  { name: 'Desi Leaks', path: '/desileaks' },
  { name: 'Viral News', path: '/viral' },
  { name: 'Hot Actresses', path: '/ulluactresses' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black via-zinc-900 to-black text-white px-4 py-3 shadow-lg sticky top-0 z-50 border-b border-pink-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent tracking-wider"
        >
          LustVerse 🔞
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="relative text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all duration-300 hover:text-pink-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-pink-500" onClick={toggleMenu}>
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-4 bg-black bg-opacity-90 p-4 rounded-xl text-lg font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block text-white hover:text-pink-500"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
