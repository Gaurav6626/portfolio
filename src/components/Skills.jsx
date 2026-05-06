import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Plug,
  CreditCard,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { skills } from '../data/resume';
import SectionHeader from './SectionHeader';

const iconMap = { Server, Database, Plug, CreditCard, ShieldCheck, Zap };

const Skills = () => {
  return (
    <section id="skills" className="relative section-padding bg-dark-900/50">
      <div className="absolute inset-0 bg-grid -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="My Toolbox"
          title="Skills & Expertise"
          subtitle="Technologies and tools I use daily to build production-grade backends."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, idx) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Border glow */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${s.color} rounded-2xl opacity-0 group-hover:opacity-60 blur transition-opacity duration-500`}
                />

                <div className="relative h-full glass-card p-6 overflow-hidden">
                  {/* Decorative blob */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${s.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`}
                  />

                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {s.category}
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative overflow-hidden glass-card py-6"
        >
          <div className="flex gap-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[
              'PHP',
              'Laravel',
              'MySQL',
              'REST API',
              'Sanctum',
              'Passport',
              'Razorpay',
              'Stripe',
              'PayPal',
              'Spatie',
              'Eloquent',
              'Redis',
              'React',
              'Next.js',
              'WhatsApp API',
            ]
              .concat([
                'PHP',
                'Laravel',
                'MySQL',
                'REST API',
                'Sanctum',
                'Passport',
                'Razorpay',
                'Stripe',
                'PayPal',
                'Spatie',
                'Eloquent',
                'Redis',
                'React',
                'Next.js',
                'WhatsApp API',
              ])
              .map((t, i) => (
                <span
                  key={i}
                  className="text-2xl sm:text-3xl font-display font-bold text-gray-600 hover:text-cyan-400 transition-colors"
                >
                  {t}
                </span>
              ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
