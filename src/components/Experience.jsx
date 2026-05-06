import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/resume';
import SectionHeader from './SectionHeader';

const Experience = () => {
  return (
    <section id="experience" className="relative section-padding">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Career"
          title="Professional Experience"
          subtitle="The journey of solving real-world problems with code."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 sm:-translate-x-1/2" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col sm:flex-row gap-8 mb-12 ${
                idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 ring-4 ring-dark-900 z-10 animate-glow" />

              {/* Spacer */}
              <div className="hidden sm:block sm:w-1/2" />

              {/* Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-7 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl group-hover:from-indigo-500/20 group-hover:to-cyan-500/20 transition" />

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500">
                      <Briefcase size={18} className="text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-cyan-400 font-semibold mt-1">
                    {exp.company}
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {exp.period}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.achievements.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex gap-2.5 text-gray-300 text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-cyan-400"
                        />
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
