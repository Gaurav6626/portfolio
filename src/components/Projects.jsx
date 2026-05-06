import { motion } from 'framer-motion';
import { ExternalLink, Folder, Sparkles, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/resume';
import SectionHeader from './SectionHeader';

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding bg-dark-900/50">
      <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Selected Work"
          title="Featured Projects"
          subtitle="Real-world systems I've architected — built with Laravel, scaled with care."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${p.gradient} rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500`}
              />

              <div className="relative h-full glass-card overflow-hidden flex flex-col">
                {/* Top illustration */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}
                >
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-20 bg-grid" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder
                      size={70}
                      strokeWidth={1.2}
                      className="text-white/90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Sparkles size={20} className="text-white/80 animate-pulse" />
                  </div>
                  <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-sm text-xs font-mono text-white">
                    {p.role}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold text-white mb-1 flex items-center gap-2">
                    {p.title}
                    <ArrowUpRight
                      size={18}
                      className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </h3>
                  <p className="text-sm text-cyan-400/80 font-medium mb-3">
                    {p.subtitle}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-gray-300 flex gap-2 items-start"
                      >
                        <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-cyan-400" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 mb-4">
            Want a closer look at the architecture or code samples?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
          >
            Let's Talk
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
