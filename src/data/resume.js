// Centralized data extracted from Gaurav Barnwal's resume
export const profile = {
  name: 'Gaurav Barnwal',
  role: 'Software Engineer | Laravel Developer',
  tagline:
    'Building scalable Sales, ERP & Survey Management Systems with Laravel.',
  about:
    "I'm a Laravel Developer and Software Engineer with hands-on experience building large-scale ERP, Sales Ledger, Survey Management, and Government Service Management systems. I specialize in REST APIs, RBAC systems, AJAX-based applications, dynamic reporting, and database optimization for high-volume datasets.",
  location: 'Ballia, Uttar Pradesh, India',
  email: 'gauravbarnwal02@gmail.com',
  phone: '+91 9506716626',
  linkedin: 'https://www.linkedin.com/in/gauravbarnwal02/',
  github: 'https://github.com/',
  yearsExperience: 2,
  projectsDelivered: 5,
  recordsHandled: '100k+',
  satisfaction: 100,
};

export const skills = [
  {
    category: 'Backend Development',
    icon: 'Server',
    items: [
      'PHP',
      'Laravel',
      'REST API',
      'MVC Architecture',
      'Object Oriented Programming',
    ],
    color: 'from-rose-500 to-orange-500',
  } 
];

export const experience = [
  {
    company: 'TechnoBren Infotech Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Feb 2024 — Present',
    location: 'Full-time',
    achievements: [
      'Designed and developed Sales Ledger Management Systems for invoices, returns, payments, and balances.',
      'Built customer-wise, salesman-wise, and date-wise dynamic sales reporting systems.',
      'Developed AJAX-based DataTables with server-side pagination and searching for large datasets.',
      'Implemented RBAC systems for Admin, Salesman, and Accounts roles.',
      'Developed and optimized RESTful APIs for frontend-backend communication.',
      'Built large-scale government service management applications for electricity projects.',
      'Worked on survey management modules with dynamic question mapping and response collection.',
      'Developed multi-country survey and sales platforms with country-specific configurations.',
      'Optimized database queries and improved overall application performance.',
    ],
  },
];

export const projects = [
  {
    title: 'Movit Project',
    subtitle: 'Uganda Sales Ledger Management System',
    role: 'Software Engineer',
    description:
      'Developed a complete Sales Ledger Management System for tracking invoices, sales, returns, payments, and outstanding balances with advanced reporting and RBAC features.',
    highlights: [
      'Sales & invoice management',
      'Customer-wise and salesman-wise reports',
      'AJAX-based DataTables',
      'RESTful API development',
      'Role-based access control',
    ],
    tech: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'AJAX',
      'Bootstrap',
    ],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    accent: 'emerald',
  },

  {
    title: 'ENEO Project',
    subtitle: 'Cameroon Govt. Electricity Project',
    role: 'Laravel Developer',
    description:
      'Worked on a large-scale government electricity management platform with modules for work orders, complaints, surveys, billing, inspections, and service notifications.',
    highlights: [
      'Electricity service management',
      'Work order & inspection modules',
      'Image handling & preview systems',
      'Advanced reporting tools',
      'Third-party API integrations',
    ],
    tech: [
      'Laravel',
      'PHP',
      'MySQL',
      'AJAX',
      'Bootstrap',
      'REST APIs',
    ],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    accent: 'indigo',
  },

  {
    title: 'BEE Project',
    subtitle: 'Uganda Sales & Survey Management System',
    role: 'Software Engineer',
    description:
      'Built a Survey and Sales Management System including dynamic survey creation, category-based question mapping, analytics dashboards, and financial tracking.',
    highlights: [
      'Survey management system',
      'Dynamic question loading',
      'Real-time AJAX interactions',
      'Sales analytics dashboards',
      'Financial tracking modules',
    ],
    tech: [
      'Laravel',
      'MySQL',
      'AJAX',
      'JavaScript',
      'REST APIs',
    ],
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    accent: 'pink',
  },

  {
    title: 'BEE IB Project',
    subtitle: 'Multi-country Sales & Survey Platform',
    role: 'Laravel Developer',
    description:
      'Developed a multi-country platform supporting dynamic surveys, real-time APIs, sales analytics, and secure RBAC access across multiple regions.',
    highlights: [
      'Country-specific configurations',
      'Survey APIs integration',
      'Combined analytics dashboards',
      'Multi-user RBAC system',
      'Performance optimization',
    ],
    tech: [
      'Laravel',
      'PHP',
      'MySQL',
      'AJAX',
      'Bootstrap',
    ],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    accent: 'yellow',
  },

  {
    title: 'Book Record Management System',
    subtitle: 'Library & Bookstore Management',
    role: 'PHP Developer',
    description:
      'Developed a web-based Book Record Management System for managing library and bookstore records with CRUD operations and responsive UI.',
    highlights: [
      'Book CRUD operations',
      'Role-based access',
      'Responsive UI',
      'Search & filtering',
      'Real-time updates',
    ],
    tech: [
      'PHP',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'AJAX',
    ],
    gradient: 'from-cyan-500 via-sky-500 to-blue-500',
    accent: 'cyan',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    status: 'Completed',
    institute: 'J S University, Shikohabad (U.P.)',
    period: '2021 — 2023',
  },

  {
    degree: 'Bachelor of Computer Applications (BCA)',
    status: 'Completed',
    institute: 'Sai Nath University, Ranchi, Jharkhand',
    period: '2012 — 2015',
  },
 
];

export const achievements = [
 'Developed scalable ERP, Sales Ledger, and Survey Management Systems.',
  'Built dynamic AJAX-based applications with optimized performance.',
  'Implemented RBAC systems for secure multi-user access.',
  'Worked on large-scale government electricity management projects.',
  'Optimized server-side data handling for large datasets.',
  "Secured 'O Level' certification from NIELIT.",
  'Achieved 2nd Position in Class 12th at school level.',
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
