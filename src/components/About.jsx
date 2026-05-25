import { motion } from 'framer-motion';
import { Award, Code2, Database, Rocket, TrendingUp, Users } from 'lucide-react';
import { profile, achievements } from '../data/resume';
import SectionHeader from './SectionHeader';

const stats = [
  { label: 'Years Experience', value: '2+', icon: Award, color: 'from-indigo-500 to-purple-500' },
  { label: 'Projects Delivered', value: '3+', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
  { label: 'Records Handled', value: '100k+', icon: Database, color: 'from-emerald-500 to-teal-500' },
  { label: 'Client Satisfaction', value: '100%', icon: TrendingUp, color: 'from-fuchsia-500 to-pink-500' },
];

const About = () => {
  return (
    <section id="about" className="relative section-padding">
      {/* bg accents */}
      <div className="absolute top-1/3 -left-32 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-32 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Who Am I"
          title="About Me"
          subtitle="A passionate backend engineer turning complex problems into elegant, performant systems."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <Code2 className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                The Story
              </h3>
              <p className="text-gray-300 leading-relaxed">{profile.about}</p>
              <p className="text-gray-400 leading-relaxed mt-4">
                I love working on systems that need to scale — payment gateway
                integrations, role-based permissions, real-time dashboards, and
                APIs that don't crumble when traffic spikes. If it involves
                Laravel, MySQL, or making slow code fast, count me in.
              </p>
            </div>

            {/* Achievements */}
            <div className="glass-card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                  <Award size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Key Achievements
                </h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-gray-300"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                    <span>{a}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass-card p-6 relative overflow-hidden cursor-default"
              >
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg mb-4`}
                >
                  <stat.icon size={22} className="text-white" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 glass-card p-6 relative overflow-hidden bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border-indigo-500/20"
            >
              <Users className="text-cyan-400 mb-3" size={28} />
              <blockquote className="text-gray-200 text-lg italic leading-relaxed">
                "Optimized large dataset processing from minutes to seconds —
                if your queries are slow, I'm the person you call."
              </blockquote>
              <div className="mt-4 text-sm text-gray-500">— My motto</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
