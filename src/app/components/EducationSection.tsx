"use client"

import { useState, useEffect } from 'react';
import { educationData } from '../data/education';
import { Calendar, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('education');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Training</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and professional development that has shaped my 
            skills and knowledge in software development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
            
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`relative z-10 mb-12 transition-all duration-700 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800" />
                  
                  {/* Date */}
                  <div className={`mb-4 md:mb-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                  }`}>
                    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-3 inline-flex items-center mb-2">
                      <Calendar size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl" />
                      <div className="flex items-center mb-3">
                        {item.type === 'education' ? (
                          <BookOpen size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                        ) : (
                          <Award size={20} className="text-purple-600 dark:text-purple-400 mr-2" />
                        )}
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{item.institution}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;