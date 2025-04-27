import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold tracking-tight">
              Deivid<span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Frontend Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              &copy; {currentYear} David Alvarez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;