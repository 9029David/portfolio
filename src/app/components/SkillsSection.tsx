import SkillCard from './SkillsCard';
import { skillsData } from '../data/skills';


const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I specialize in modern frontend technologies, with a focus on building 
            responsive, accessible, and performant web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 transform`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SkillCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;