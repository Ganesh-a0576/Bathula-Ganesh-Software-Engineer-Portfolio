import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Settings, Brain, Zap,
  Globe, Shield, GitBranch, Terminal, Cpu, Layers
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript/TypeScript', level: 80 },
        { name: 'Java', level: 80 }
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Next.js', level: 82 }
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'AWS', level: 78 },
        { name: 'Firebase', level: 82 }
      ],
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Vercel', level: 85 }
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Core Engineering',
      icon: Brain,
      skills: [
        { name: 'Data Structures & Algorithms', level: 92 },
        { name: 'System Design', level: 85 },
        { name: 'SDLC', level: 88 },
        { name: 'Problem Solving', level: 95 }
      ],
      color: 'from-teal-500 to-green-600'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and engineering practices that drive scalable solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-premium group"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        variants={skillVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { icon: Globe, name: 'Web Dev', color: 'text-blue-400' },
            { icon: Shield, name: 'Security', color: 'text-green-400' },
            { icon: GitBranch, name: 'Version Control', color: 'text-orange-400' },
            { icon: Terminal, name: 'CLI Tools', color: 'text-purple-400' },
            { icon: Cpu, name: 'Performance', color: 'text-red-400' },
            { icon: Zap, name: 'Optimization', color: 'text-yellow-400' }
          ].map((item, index) => (
            <motion.div
              key={item.name}
              className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 text-center group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;