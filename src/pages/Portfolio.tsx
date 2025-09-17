import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SDLCSection from '@/components/SDLCSection';
import ContactSection from '@/components/ContactSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <SDLCSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;