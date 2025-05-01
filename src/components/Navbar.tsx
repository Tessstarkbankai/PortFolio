import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#00ffaa]' : 'text-white';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#00ffaa]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="#Home" className="flex items-center space-x-2">
            <Code className="text-[#00ffaa]" size={24} />
            <span className="text-xl font-bold text-white">Ayushmaan</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/')} hover:text-[#00ffaa] transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/#about" 
              className={`${isActive('/#about')} hover:text-[#00ffaa] transition-colors`}
            >
              About
            </Link>
            <Link 
              to="#contact" 
              className={`${isActive('/#contact')} hover:text-[#00ffaa] transition-colors`}
            >
              <a href="#contact"></a>Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}