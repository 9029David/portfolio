export interface Skill {
  name: string;

}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  type: 'education' | 'certification';
  title: string;
  institution: string;
  period: string;
  description: string;
}