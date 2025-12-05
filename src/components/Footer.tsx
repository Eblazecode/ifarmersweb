import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import IFARMERSLOGO from '../assets/IFARMERS.jpg'; // <-- IMPORT LOGO FROM ASSETS

const Footer: React.FC = () => {
  return (
      <footer className="bg-[#2D5016] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* ---- LOGO SECTION ---- */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                    src={IFARMERSLOGO}
                    alt="Company Logo"
                    className="h-10 w-auto object-contain"
                />
              </div>

              <p className="text-gray-300 text-sm">
                Innovating agriculture for a sustainable future across Africa.
              </p>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-[#7CB342]"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-[#7CB342]"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-[#7CB342]"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="hover:text-[#7CB342]"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-[#7CB342]">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#7CB342]">About Us</Link></li>
                <li><Link to="/services" className="hover:text-[#7CB342]">Services</Link></li>
                <li><Link to="/knowledge" className="hover:text-[#7CB342]">Knowledge Center</Link></li>
                <li><Link to="/contact" className="hover:text-[#7CB342]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/services" className="hover:text-[#7CB342]">Fertilizer Blending</Link></li>
                <li><Link to="/services" className="hover:text-[#7CB342]">Input Supply</Link></li>
                <li><Link to="/services" className="hover:text-[#7CB342]">Project Management</Link></li>
                <li><Link to="/services" className="hover:text-[#7CB342]">Agric Software</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" /><span>+254 700 123 456</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" /><span>info@ifarmers.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" /><span>Abuja, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 iFarmers Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
