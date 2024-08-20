// src/components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      {/* Bouton du menu burger */}
      <div className="burger-menu">
        <button
          id="burger"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>

      {/* Navigation du menu */}
      <ul className={`navbar list-none ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <li className="my-2">
          <Link href="/" className="text-white hover:underline">
            Accueil
          </Link>
        </li>
        <li className="my-2">
          <Link href="/a-propos" className="text-white hover:underline">
            À Propos
          </Link>
        </li>
        <li className="my-2">
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
        </li>
        <li className="my-2">
          <Link href="/portfolio" className="text-white hover:underline">
            Portfolio
          </Link>
        </li>
        <li className="my-2">
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
