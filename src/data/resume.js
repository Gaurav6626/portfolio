// Centralized data extracted from Akash Yadav's resume
export const profile = {
  name: 'Akash Yadav',
  role: 'Laravel Backend Developer',
  tagline: 'Building scalable ERP & SFA systems with 4+ years of experience.',
  about:
    "I'm a results-driven Laravel Developer with 4+ years of experience crafting scalable ERP and SFA systems. I specialize in API development, third-party integrations, and squeezing every drop of performance out of large datasets — turning multi-minute queries into sub-second responses.",
  location: 'Azamgarh, Uttar Pradesh, India',
  email: 'ay9824810@gmail.com',
  phone: '+91 9026107594',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  yearsExperience: 4,
  projectsDelivered: 10,
  recordsHandled: '100k+',
  satisfaction: 100,
};

export const skills = [
  {
    category: 'Backend',
    icon: 'Server',
    items: ['PHP', 'Laravel', 'MVC Architecture', 'Eloquent ORM'],
    color: 'from-rose-500 to-orange-500',
  },
  {
    category: 'Database',
    icon: 'Database',
    items: ['MySQL', 'SQL', 'Query Optimization', 'Indexing'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'API Development',
    icon: 'Plug',
    items: ['RESTful APIs', 'Sanctum', 'Passport', 'JSON Web Tokens'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    category: 'Integrations',
    icon: 'CreditCard',
    items: ['Razorpay', 'Stripe', 'PayPal', 'Paystack', 'WhatsApp API'],
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    category: 'Auth & Roles',
    icon: 'ShieldCheck',
    items: ['Spatie Role & Permission', 'RBAC', 'OAuth Flows'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    category: 'Performance',
    icon: 'Zap',
    items: ['Large Data Handling', 'Query Tuning', 'Caching', 'Background Jobs'],
    color: 'from-indigo-500 to-violet-500',
  },
];

export const experience = [
  {
    company: 'TechnoBren Infotech Pvt. Ltd.',
    role: 'Laravel Developer',
    period: '2022 — Present',
    location: 'Full-time',
    achievements: [
      'Developed and maintained ERP & SFA systems for sales, inventory, and order management.',
      'Built and optimized REST APIs powering high-performance applications.',
      'Handled large-scale data processing of 100k+ records with custom performance tuning.',
      'Integrated payment gateways including Razorpay, Stripe, and PayPal.',
      'Reduced query execution time significantly through indexing and query refactoring.',
      'Collaborated with frontend teams using React / Next.js to ship full-stack features.',
    ],
  },
];

export const projects = [
  {
    title: 'CROOSE',
    subtitle: 'AI-Powered WhatsApp Command Centre',
    role: 'Laravel Backend Developer',
    description:
      'Led development of an AI-based WhatsApp automation platform with appointment booking and chatbot automation. Built a scalable Laravel backend paired with a React/Next.js frontend.',
    highlights: [
      'AI-driven WhatsApp automation engine',
      'Stripe, Paystack & WhatsApp API integration',
      'Real-time chatbot & appointment system',
      'Multi-tenant architecture',
    ],
    tech: ['Laravel', 'Next.js', 'Stripe', 'Paystack', 'WhatsApp API'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    accent: 'emerald',
  },
  {
    title: 'Masafi',
    subtitle: 'ERP Sales & Distribution System',
    role: 'Laravel Backend Developer',
    description:
      'ERP modules covering sales, revenue, collections, and reporting. Optimized database queries for large transactional data and ensured data consistency across orders, invoices, and deliveries.',
    highlights: [
      'High-volume transactional data handling',
      'Sales, collections & reporting modules',
      'Complex invoicing & delivery flows',
      'End-to-end data consistency',
    ],
    tech: ['Laravel', 'MySQL', 'REST APIs', 'Eloquent'],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    accent: 'indigo',
  },
  {
    title: 'Movit / EliteSale',
    subtitle: 'SFA & ERP System',
    role: 'Full Stack Developer',
    description:
      'Full-stack development of order management, stock, routes and payments. Implemented role-based access control, user management and built reporting & analytics dashboards.',
    highlights: [
      'Order, stock & route management',
      'Role-based access control',
      'Analytics & reporting dashboards',
      'User management system',
    ],
    tech: ['Laravel', 'React', 'MySQL', 'Spatie', 'Chart.js'],
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    accent: 'pink',
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications',
    status: 'Pursuing',
    institute: 'Mohammad Hasan PG College, Jaunpur',
    period: '2023 — Present',
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    status: 'Completed',
    institute: 'Prasad Polytechnic, Jaunpur',
    period: '2018 — 2021',
  },
];

export const achievements = [
  'Optimized large dataset processing from minutes to seconds.',
  'Improved application performance through aggressive query optimization.',
  'Successfully delivered multiple ERP & automation systems end-to-end.',
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
