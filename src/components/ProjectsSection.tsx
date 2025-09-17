import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Code, Database, Cloud,
  Zap, Shield, Users, BarChart3, Search, ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'URL Shortener',
      description: 'Fast & minimal link shortening system with real-time analytics, custom domains, and QR code generation. Built for scale with caching and rate limiting.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
      features: [
        'Custom short URLs & domains',
        'Real-time click analytics',
        'QR code generation',
        'Rate limiting & caching',
        'REST API with authentication'
      ],
      icon: Zap,
      color: 'from-blue-500 to-purple-600',
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-blue-500/20 to-purple-600/20'
    },
    {
      title: 'Qurda Search Engine',
      description: 'Lightweight search engine with custom indexing algorithm, ranking system, and real-time suggestions. Implements TF-IDF scoring and web crawling.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
      features: [
        'Custom web crawler',
        'TF-IDF ranking algorithm',
        'Real-time search suggestions',
        'Distributed indexing',
        'RESTful search API'
      ],
      icon: Search,
      color: 'from-green-500 to-teal-600',
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-green-500/20 to-teal-600/20'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN e-commerce platform with secure payments, inventory management, and admin dashboard. Optimized for performance and scalability.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS S3'],
      features: [
        'Secure payment processing',
        'Inventory management',
        'Admin dashboard',
        'Order tracking system',
        'Product recommendations'
      ],
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-600',
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing scalable solutions that demonstrate technical depth, problem-solving, and engineering best practices
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group perspective-1000"
              variants={cardVariants}
            >
              <div className="card-premium h-full flex flex-col transform-gpu transition-all duration-500 group-hover:rotate-y-2 group-hover:scale-105">
                {/* Project Header */}
                <div className={`p-6 rounded-t-2xl ${project.image} border-b border-border`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        className="p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="p-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-4 w-4 text-primary-foreground" />
                      </motion.a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex space-x-3">
                    <Button size="sm" className="flex-1 btn-ghost">
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1 btn-hero">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Teaser */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects including:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              'Distributed Chat System',
              'ML Recommendation Engine',
              'Blockchain Voting App',
              'Real-time Collaboration Tool'
            ].map((project) => (
              <span
                key={project}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {project}
              </span>
            ))}
          </div>
          <Button variant="outline" className="btn-ghost">
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;