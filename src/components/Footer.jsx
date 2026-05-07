import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2 } from 'lucide-react';
import { profile } from '../data/resume';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 py-10 px-6 sm:px-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-xl shadow-indigo-500/30 hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          {/* <Code2 size={16} className="text-cyan-400" /> */}
          <span>
            Designed & built by{' '}
            <span className="text-white font-semibold">{profile.name}</span>
          </span>
        </div>

        {/* <motion.div
          className="flex items-center gap-1.5 text-gray-500"
          whileHover={{ scale: 1.05 }}
        >
          Made with <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />{' '}
          using React + Tailwind + Framer Motion
        </motion.div> */}

        <div className="text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
