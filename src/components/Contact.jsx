import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/resume';
import SectionHeader from './SectionHeader';

// EmailJS credentials are read from environment variables.
// Set them in a .env file at the project root (see .env.example).
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Detect obvious placeholder values from the setup docs so we can surface
// a clear "needs configuration" state instead of a misleading API error.
const PLACEHOLDER_PATTERNS = [
  /^$/,
  /xxxxxxx/i,
  /^service_abc1234$/,
  /^template_xyz5678$/,
  /^Abc123XyZ/,
  /^your[_-]?service[_-]?id$/i,
  /^your[_-]?template[_-]?id$/i,
  /^your[_-]?public[_-]?key$/i,
];

const isPlaceholder = (value) =>
  !value || PLACEHOLDER_PATTERNS.some((re) => re.test(value));

const isEmailJSConfigured =
  !isPlaceholder(SERVICE_ID) &&
  !isPlaceholder(TEMPLATE_ID) &&
  !isPlaceholder(PUBLIC_KEY);

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.message.trim()) e.message = 'Please enter a message';
    else if (form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  // Fallback when EmailJS isn't configured: open the user's mail client
  // pre-filled with everything they typed, so the form still works.
  const sendViaMailto = () => {
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Akash,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 6000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    // If EmailJS isn't set up, gracefully fall back to mailto so the form
    // never feels broken.
    if (!isEmailJSConfigured) {
      sendViaMailto();
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(
        err?.text ||
          'Failed to send message. Please try again or email me directly.'
      );
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: '#',
      color: 'from-fuchsia-500 to-pink-500',
    },
  ];

  const isSending = status === 'sending';

  return (
    <section id="contact" className="relative section-padding bg-dark-900/50">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Build Together"
          subtitle="Have a project in mind, a tricky API problem, or just want to say hi? My inbox is open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 glass-card p-5 hover:border-white/20 transition"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${c.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                >
                  <c.icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {c.label}
                  </div>
                  <div className="text-white font-medium truncate">
                    {c.value}
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="glass-card p-5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Find Me Online
              </div>
              <div className="flex gap-3">
                {[
                  { Icon: FaGithub, href: profile.github, label: 'GitHub' },
                  { Icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
                  {
                    Icon: MessageCircle,
                    href: `https://wa.me/${profile.phone.replace(/\D/g, '')}`,
                    label: 'WhatsApp',
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-cyan-500/20 hover:border-cyan-400/40 transition group"
                  >
                    <Icon
                      size={20}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time card */}
            <div className="glass-card p-5 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Usually responds within 24 hours
                  </div>
                  <div className="text-xs text-gray-400">
                    Open to freelance & full-time roles
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 glass-card p-7 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl" />

            {/* Setup notice — shown when env vars still hold placeholder values */}
            {!isEmailJSConfigured && (
              <div className="relative mb-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <AlertCircle
                  size={20}
                  className="text-amber-400 flex-shrink-0 mt-0.5"
                />
                <div className="text-sm">
                  <div className="font-semibold text-amber-300 mb-1">
                    EmailJS not configured yet
                  </div>
                  <p className="text-amber-200/80 leading-relaxed">
                    Your <code className="px-1.5 py-0.5 rounded bg-black/30 text-amber-200 font-mono text-xs">.env</code>{' '}
                    file still contains placeholder values. Until you add real
                    credentials, the form will fall back to opening your mail
                    client. See{' '}
                    <span className="font-mono text-amber-200">
                      EMAILJS_SETUP.md
                    </span>{' '}
                    for the 5-minute setup.
                  </p>
                </div>
              </div>
            )}

            {/* Success/Error toasts */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative mb-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-emerald-300">
                      {isEmailJSConfigured
                        ? 'Message sent successfully!'
                        : 'Opened in your mail app!'}
                    </div>
                    <div className="text-sm text-emerald-200/80 mt-0.5">
                      {isEmailJSConfigured
                        ? "Thanks for reaching out — I'll get back to you within 24 hours."
                        : 'Hit Send in your mail client to deliver the message.'}
                    </div>
                  </div>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative mb-5 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3"
                >
                  <AlertCircle size={20} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-rose-300">
                      Something went wrong
                    </div>
                    <div className="text-sm text-rose-200/80 mt-0.5">
                      {errorMsg}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Jane Doe"
                    disabled={isSending}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition disabled:opacity-50 ${
                      errors.name
                        ? 'border-rose-500/60 focus:border-rose-400/80'
                        : 'border-white/10 focus:border-cyan-400/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="jane@company.com"
                    disabled={isSending}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition disabled:opacity-50 ${
                      errors.email
                        ? 'border-rose-500/60 focus:border-rose-400/80'
                        : 'border-white/10 focus:border-cyan-400/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  placeholder="Project inquiry / Job opportunity / Just saying hi"
                  disabled={isSending}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell me about your project, role or idea..."
                  disabled={isSending}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition resize-none disabled:opacity-50 ${
                    errors.message
                      ? 'border-rose-500/60 focus:border-rose-400/80'
                      : 'border-white/10 focus:border-cyan-400/50'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={!isSending ? { scale: 1.02 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                Or email me directly at{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-cyan-400 hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
