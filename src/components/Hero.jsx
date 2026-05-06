import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  ArrowDown,
  Sparkles,
  Download,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/resume';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 w-[420px] h-[420px] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left side */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-gray-300">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block animate-gradient bg-[length:200%_auto]">
              {profile.name.split(' ')[0]}
            </span>
            <br />
            <span className="text-white">{profile.name.split(' ')[1]}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium flex items-center gap-2 flex-wrap"
          >
            <Sparkles size={20} className="text-cyan-400" />
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            {profile.tagline} I architect APIs, integrate payment gateways, and
            optimize databases that handle 100k+ records — making slow systems
            fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex items-center gap-2 text-sm text-gray-400"
          >
            <MapPin size={16} className="text-indigo-400" />
            {profile.location}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowDown
                size={18}
                className="relative z-10 transition-transform group-hover:translate-y-1"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Download size={18} />
              Get in Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: FaGithub, href: profile.github, label: 'GitHub' },
              { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-cyan-500/20 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              >
                <Icon
                  size={20}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right side: Code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative animate-float">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse" />

            {/* Code card */}
            <div className="relative bg-dark-800/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-dark-900/50">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-xs font-mono text-gray-500">
                  developer.php
                </span>
              </div>

              <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-pink-400">&lt;?php</span>
                  {'\n'}
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">Developer</span>{' '}
                  <span className="text-gray-500">{'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-cyan-400">public</span>{' '}
                  <span className="text-purple-400">$name</span> ={' '}
                  <span className="text-emerald-400">"Akash Yadav"</span>;{'\n'}
                  {'  '}
                  <span className="text-cyan-400">public</span>{' '}
                  <span className="text-purple-400">$role</span> ={' '}
                  <span className="text-emerald-400">"Laravel Dev"</span>;{'\n'}
                  {'  '}
                  <span className="text-cyan-400">public</span>{' '}
                  <span className="text-purple-400">$years</span> ={' '}
                  <span className="text-orange-300">4</span>;{'\n\n'}
                  {'  '}
                  <span className="text-cyan-400">public function</span>{' '}
                  <span className="text-blue-300">build</span>(){' '}
                  <span className="text-gray-500">{'{'}</span>
                  {'\n'}
                  {'    '}
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-gray-500">[</span>
                  {'\n'}
                  {'      '}
                  <span className="text-emerald-400">'apis'</span>,{'\n'}
                  {'      '}
                  <span className="text-emerald-400">'erp_systems'</span>,{'\n'}
                  {'      '}
                  <span className="text-emerald-400">'integrations'</span>,
                  {'\n'}
                  {'      '}
                  <span className="text-emerald-400">'performance'</span>,{'\n'}
                  {'    '}
                  <span className="text-gray-500">];</span>
                  {'\n'}
                  {'  '}
                  <span className="text-gray-500">{'}'}</span>
                  {'\n'}
                  <span className="text-gray-500">{'}'}</span>
                </code>
              </pre>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-2 rounded-xl shadow-xl shadow-indigo-500/30 text-white text-sm font-bold"
            >
              4+ Years
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-cyan-500 to-emerald-500 px-4 py-2 rounded-xl shadow-xl shadow-cyan-500/30 text-white text-sm font-bold"
            >
              100k+ Records
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
        >
          <span className="w-1 h-2 rounded-full bg-current" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
