"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl font-bold tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Deivid<span className="text-blue-600 dark:text-blue-400">.</span>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={`relative pb-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                      activeSection === item.id 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : ''
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`block py-2 font-medium ${
                    activeSection === item.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;