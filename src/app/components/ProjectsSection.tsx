"use client"

import { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';


const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  
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
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  // Get unique categories
  const categories = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  );

  const filteredProjects = filter 
    ? projectsData.filter(project => project.technologies.includes(filter))
    : projectsData;

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/5 dark:bg-blue-600/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/5 dark:bg-purple-600/5 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project reflects my passion for 
            clean code, modern design, and exceptional user experience.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2 md:space-x-3">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 text-sm md:text-base rounded-full whitespace-nowrap transition-colors ${
                filter === null
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm md:text-base rounded-full whitespace-nowrap transition-colors ${
                  filter === category
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index % 3) * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;