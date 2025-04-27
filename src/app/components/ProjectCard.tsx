"use client"

import { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Project } from '../types';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-52">
        <Image
          src={`/${project.image}`} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          width={500}
          height={500}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-60'
        }`} />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 bg-blue-600/80 dark:bg-blue-500/80 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-600/80 text-white rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <Link 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GitHub size={20} />
              </Link >
            )}
            {project.liveUrl && (
              <Link  
                href={project.liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={20} />
              </Link >
            )}
          </div>
          
          {/* <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
            View Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;