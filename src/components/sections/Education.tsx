import React from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Briefcase } from 'lucide-react';

const educationData = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    duration: 'Aug 2023 - Present',
    score: 'CGPA: 7.2'
  },
  {
    institution: 'Shree Sanatan Dharam Education Centre',
    location: 'Kanpur, Uttar Pradesh',
    degree: 'Intermediate (Class XII)',
    duration: 'Apr 2022 - Apr 2023',
    score: 'Percentage: 70%'
  },
  {
    institution: 'Shree Sanatan Dharam Education Centre',
    location: 'Kanpur, Uttar Pradesh',
    degree: 'Matriculation (Class X)',
    duration: 'Apr 2020 - Apr 2021',
    score: 'Percentage: 75%'
  }
];

const trainingData = [
  {
    title: 'Data Structures and Algorithms',
    organization: 'Cipher Schools',
    duration: 'Jun 2025 - July 2025',
    link: 'https://www.cipherschools.com/certificate/preview?id=6881d4fbca64e035786b15dc',
    details: [
      'Completed an industry-oriented DSA program covering arrays to graphs with emphasis on hands-on C++ implementation.',
      'Strengthened algorithmic thinking and coding efficiency through structured practice modules.'
    ]
  },
  {
    title: 'Software Engineering Job Simulation',
    organization: 'JPMorgan Chase & Co. | Forage',
    duration: 'Sep 2025',
    link: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68caf3420b0b9899833b17bf_1758302461915_completion_certificate.pdf',
    details: [
      'Executed a real-world job simulation involving environment setup, API integration, and structured debugging.',
      'Gained practical exposure to professional engineering workflows and industry-relevant tools.'
    ]
  }
];

const achievementsData = [
  'Achieved Top 50 in TVS Credit E.P.I.C 7.0 Challenge, improving coding skills.',
  'Solved 450+ problems on Neo Colab, sharpening C, C++ and Java skills.'
];

export const Education: React.FC = () => {
  return (
    <Section id="background">
      <div className="flex flex-col gap-16 w-full">
        
        {/* Education Timeline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <BookOpen className="text-[#ff8c00]" size={36} />
            Education
          </h2>
          <div className="flex flex-col gap-6 border-l-2 border-[#ff8c00]/30 ml-4 pl-8 relative">
            {educationData.map((edu, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="relative bg-white/5 border border-white/10 p-6 rounded-xl glass hover:border-[#ff8c00]/50 transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-[#ff8c00] rounded-full -left-[41px] top-8 shadow-[0_0_15px_#ff8c00]" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <span className="text-sm font-mono text-[#ff8c00]/80 whitespace-nowrap bg-[#ff8c00]/10 px-3 py-1 rounded-full">{edu.duration}</span>
                </div>
                <div className="text-[#22d3ee] font-medium mb-1">{edu.degree}</div>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>{edu.location}</span>
                  <span className="font-mono bg-white/10 px-2 py-1 rounded">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training & Experience */}
        <div>
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <Briefcase className="text-[#ff8c00]" size={36} />
            Training & Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingData.map((train, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="glass border border-white/10 p-6 rounded-xl flex flex-col h-full hover:border-[#ff8c00]/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold text-white">{train.title}</h3>
                  <span className="text-xs font-mono text-[#ff8c00]/80 whitespace-nowrap">{train.duration}</span>
                </div>
                <div className="text-[#22d3ee] font-medium mb-4">{train.organization}</div>
                <ul className="list-disc list-outside ml-5 text-gray-400 space-y-2 text-sm leading-relaxed mb-6">
                  {train.details.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {train.link && (
                  <a 
                    href={train.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-auto self-start text-sm font-mono text-[#ff8c00] flex items-center gap-2 hover:text-[#ff5a00] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ff8c00] glow-orange-alt animate-pulse" />
                    View Certificate ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
            <Trophy className="text-[#ff8c00]" size={36} />
            Achievements
          </h2>
          <div className="flex flex-col gap-4">
            {achievementsData.map((achieve, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="glass border border-[#ff8c00]/20 p-4 rounded-lg flex items-center gap-4 hover:bg-[#ff8c00]/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00] shrink-0">
                  <Trophy size={20} />
                </div>
                <p className="text-gray-300">{achieve}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};
