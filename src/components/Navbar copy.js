// src/components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);

  const toggleServicesMenu = () => {
    setShowServices(!showServices);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around list-none">
        <li className="mx-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="/about" className="text-white hover:underline">About</Link>
        </li>
        <li className="mx-4">
          <Link href="/contact" className="text-white hover:underline">Contact</Link>
        </li>
        <li className="mx-4 relative">
          <button onClick={toggleServicesMenu} className="text-white hover:underline">
            Services
          </button>
          {showServices && (
            <ul className="absolute top-full left-0 mt-2 bg-gray-700 p-2 list-none">
              <li className="mb-2">
                <Link href="/services/service1" className="text-white hover:underline">Service 1</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/service2" className="text-white hover:underline">Service 2</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/service3" className="text-white hover:underline">Service 3</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
