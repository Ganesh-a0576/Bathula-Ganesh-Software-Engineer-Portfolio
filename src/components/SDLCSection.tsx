import { motion } from 'framer-motion';
import { 
  FileText, Palette, Code, TestTube, Rocket, Settings,
  Users, GitBranch, Shield, BarChart3, CheckCircle, Target
} from 'lucide-react';

const SDLCSection = () => {
  const sdlcPhases = [
    {
      title: 'Requirements',
      icon: FileText,
      description: 'Gather stakeholder needs, define user stories, and establish clear acceptance criteria',
      practices: ['User Story Mapping', 'Stakeholder Interviews', 'Technical Requirements'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Design',
      icon: Palette,
      description: 'Create system architecture, design patterns, and user experience flows',
      practices: ['System Architecture', 'API Design', 'Database Schema'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Development',
      icon: Code,
      description: 'Write clean, maintainable code following best practices and coding standards',
      practices: ['Clean Code', 'Code Reviews', 'Version Control'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Testing',
      icon: TestTube,
      description: 'Comprehensive testing strategy including unit, integration, and E2E testing',
      practices: ['Unit Testing', 'Integration Tests', 'Test Automation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Deployment',
      icon: Rocket,
      description: 'Automated CI/CD pipelines for reliable and consistent deployments',
      practices: ['CI/CD Pipelines', 'Environment Management', 'Release Strategy'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Maintenance',
      icon: Settings,
      description: 'Monitor performance, fix bugs, and implement feature enhancements',
      practices: ['Performance Monitoring', 'Bug Fixes', 'Feature Updates'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  const engineeringPrinciples = [
    {
      icon: Target,
      title: 'Ownership & Impact',
      description: 'Take end-to-end responsibility for features and their business impact'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work effectively in cross-functional teams with clear communication'
    },
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Write clean, testable code with proper error handling and security'
    },
    {
      icon: BarChart3,
      title: 'Scalability Mindset',
      description: 'Design systems that can grow and adapt to changing requirements'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 2 }
    }
  };

  return (
    <section id="sdlc" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Engineering Mindset & SDLC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demonstrating comprehensive understanding of software development lifecycle and engineering best practices
          </p>
        </motion.div>

        {/* SDLC Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <motion.div
            className="absolute top-8 left-0 w-full h-1 bg-gradient-primary rounded-full origin-left"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sdlcPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                className="relative"
                variants={cardVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} border-4 border-background shadow-lg z-10`}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Phase Card */}
                <div className="card-premium mt-8 group cursor-pointer">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${phase.color} mb-4`}>
                    <phase.icon className="h-8 w-8 text-white mx-auto" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-center">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {phase.practices.map((practice, practiceIndex) => (
                      <div key={practiceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                        <span className="text-xs text-foreground">{practice}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Engineering Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient-secondary">
            FAANGM Engineering Principles
          </h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {engineeringPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="card-premium text-center group"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 mb-4 mx-auto w-fit">
                  <principle.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{principle.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cultural Fit Indicators */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Cultural Fit Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Growth Mindset',
                description: 'Continuous learning, embracing challenges, and adapting to new technologies',
                icon: '🧠'
              },
              {
                title: 'Diversity & Inclusion',
                description: 'Building inclusive products and fostering diverse perspectives in teams',
                icon: '🌍'
              },
              {
                title: 'Customer Obsession',
                description: 'Focus on user experience and delivering value that solves real problems',
                icon: '🎯'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SDLCSection;