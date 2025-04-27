"use client"

import { useState, useEffect } from 'react';
import { Github as GitHub, Linkedin, ArrowDown } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/10 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400/20 dark:bg-purple-600/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fade-in">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              David Alvarez
            </h1>
            <div className="h-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                <span className="mr-2">I am a</span>
                <span className="text-blue-600 dark:text-blue-400 inline-block w-auto">
                  Frontend Developer
                  <span className="animate-blink ml-0.5">|</span>
                </span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
              Building modern web experiences with React, Next.js, TypeScript, and Tailwind CSS. 
              Passionate about clean code, responsive design, and creating exceptional user interfaces.
            </p>
            
            <div 
              className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-300 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Contact Me
              </Link >
              <Link  
                href="#projects" 
                className="inline-flex items-center px-6 py-3 bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors"
              >
                View My Work
              </Link >
            </div>
            
            <div 
              className={`flex gap-5 transition-all duration-1000 delay-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link  
                href="https://github.com/9029David" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHub size={24} />
              </Link >
              <Link  
                href="https://www.linkedin.com/in/9029david/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </Link >
              {/* <Link  
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Download Resume"
              >
                <FileText size={24} />
              </Link > */}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#skills" 
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll to Skills section"
          >
            <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;