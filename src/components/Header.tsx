import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import IFARMWERSLOGO from '../assets/IFARMERSLOGO.png'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Knowledge Center', path: '/knowledge' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* ---- LOGO PLACEHOLDER HERE ---- */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                  src={IFARMWERSLOGO}
                  alt="IFARMERS Logo"
                  className="h-12 w-auto object-contain"
              />
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                  <Link
                      key={link.path}
                      to={link.path}
                      className={`font-medium transition-colors ${
                          isActive(link.path)
                              ? 'text-[#7CB342] border-b-2 border-[#7CB342]'
                              : 'text-gray-700 hover:text-[#2D5016]'
                      }`}
                  >
                    {link.name}
                  </Link>
              ))}
            </nav>

            <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
              <nav className="md:hidden pb-4 space-y-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 px-4 rounded ${
                            isActive(link.path) ? 'bg-[#7CB342] text-white' : 'text-gray-700'
                        }`}
                    >
                      {link.name}
                    </Link>
                ))}
              </nav>
          )}
        </div>
      </header>
  );
};

export default Header;
