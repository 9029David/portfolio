"use client"

import { useState } from 'react';
import { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard = ({ category }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-transparent ${
        isHovered ? 'border-blue-400/30 transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;