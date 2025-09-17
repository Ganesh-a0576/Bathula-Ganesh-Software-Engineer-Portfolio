import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer | Full-Stack | Problem Solver';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full blur-sm animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-secondary rounded-full blur-sm animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-40 w-3 h-3 bg-accent rounded-full blur-sm animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container-custom text-center section-padding"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Name */}
          <motion.h1 
            className="text-6xl lg:text-7xl font-bold mb-6 text-gradient"
            variants={itemVariants}
          >
            Bathula Ganesh
          </motion.h1>

          {/* Typing Animation */}
          <motion.div 
            className="mb-4 h-12 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-xl lg:text-2xl font-medium text-muted-foreground font-mono">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1" />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Building scalable systems & solving problems with impact. 
            Passionate about clean code, system design, and delivering exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Button className="btn-hero group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Resume
            </Button>
            <Button variant="outline" className="btn-ghost group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/Ganesh-a0576', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/bathulaganesh576/', label: 'LinkedIn' },
              { icon: ExternalLink, href: '#portfolio', label: 'Portfolio' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;