import React from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'C++']
  },
  {
    title: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Firebase', 'MS Excel', 'Power BI', 'Google Colab', 'Git/GitHub']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Team Work', 'Adaptability', 'Quick Learner', 'Detail Oriented']
  }
];

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#ff5a00] inline-block" />
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={category.title} 
              className="glass neon-border rounded-xl p-8 flex flex-col hover:border-[#ff8c00]/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-[#ff8c00]/10 border border-[#ff8c00]/20 rounded-full text-[#ff8c00] font-mono text-sm shadow-[0_0_10px_rgba(255,140,0,0.1)] hover:bg-[#ff8c00]/20 hover:-translate-y-1 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
