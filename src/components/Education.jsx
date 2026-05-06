import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { education } from '../data/resume';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <section id="education" className="relative section-padding">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Learning Journey"
          title="Education"
          subtitle="Formal training that built my engineering foundation."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition" />

              <div className="relative h-full glass-card p-7 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 rounded-full blur-2xl" />

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg group-hover:rotate-6 transition-transform">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono border ${
                      edu.status === 'Pursuing'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white leading-snug">
                  {edu.degree}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-cyan-400 text-sm">
                  <BookOpen size={14} />
                  <span className="font-medium">{edu.institute}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                  <MapPin size={12} />
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
