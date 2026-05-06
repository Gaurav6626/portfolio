import { motion } from 'framer-motion';

const SectionHeader = ({ tag, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-widest">
      {tag}
    </span>
    <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-white">
      {title.split(' ').map((w, i, arr) => (
        <span key={i}>
          {i === arr.length - 1 ? <span className="gradient-text">{w}</span> : w}
          {i < arr.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
    {subtitle && (
      <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
