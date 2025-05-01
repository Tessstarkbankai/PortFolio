import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-[#00ffaa]/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="text-[#00ffaa]" size={24} />
              <span className="text-xl font-bold text-white">Ayushmaan</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming ideas into digital excellence through innovative solutions and student empowerment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#00ffaa] hover:text-[#00ffaa]/80 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#00ffaa] hover:text-[#00ffaa]/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#00ffaa] hover:text-[#00ffaa]/80 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#00ffaa] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-[#00ffaa] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-[#00ffaa] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-[#00ffaa] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Website Development</li>
              <li className="text-gray-300">Logo Design</li>
              <li className="text-gray-300">UI/UX Design</li>
              <li className="text-gray-300">Social Media Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Mail size={20} className="text-[#00ffaa] mr-3" />
                <span>contact@octocult.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone size={20} className="text-[#00ffaa] mr-3" />
                <span>8707060276</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin size={20} className="text-[#00ffaa] mr-3 mt-1" />
                <span>Invertis University,Bareilly,UP, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00ffaa]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Octocult Services LLP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#00ffaa] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00ffaa] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}