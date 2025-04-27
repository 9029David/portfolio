import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out">
        <Header />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    
  );
}
