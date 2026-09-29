export const profile = {
  name: 'Himanshu Raj Patel',
  role: 'Software Engineer',
  location: 'Bangalore, India',
  tagline:
    'Backend-oriented engineer focused on real-time systems, performance, and reliable APIs — growing toward backend architecture and infrastructure.',
  summary: [
    'I build backend systems that stay fast and reliable under load: caching, concurrency coordination, real-time ingestion, and external integrations with measurable impact.',
    'I also ship full-stack products when needed — React, Next.js, and React Native — but my primary direction is backend architecture, system design, and production engineering.',
  ],
  email: null,
  cvPath: '/cv.pdf',
  cvFilename: 'Himanshu_Raj_Patel_CV.pdf',
  social: {
    github: 'https://github.com/RAJHIMANSHUPATEL',
    twitter: 'https://x.com/HimanshuRajPat5',
    linkedin: 'https://www.linkedin.com/in/himanshu-raj-patel-2896a7207',
    instagram: 'https://www.instagram.com/himanshuraj.patel.54/',
    source: 'https://github.com/RAJHIMANSHUPATEL/Portfolio',
  },
};

export const experience = [
  {
    company: 'Krishworks Technologies and Research Labs',
    role: 'System Software Engineer',
    period: 'Present',
    current: true,
    highlights: [
      'Reduced Firebase read operations by 80% by introducing Redis caching and optimizing data access patterns, cutting operational cost and database load.',
      'Optimized game server concurrency with Redis-based coordination, reducing CPU usage by 35% and enabling 200 concurrent multiplayer sessions (6 players each) on a 2GB server backed by PostgreSQL.',
      'Built a real-time ballistic tracking system for the Indian Army using Go, Gin, PostgreSQL, Flyway, and MQTT — low-latency ingestion, event streaming, hit detection, and reliable persistence.',
      'Built a Delivery Logistics Management System integrating 5+ courier partners (including Delhivery and DTDC), handling thousands of requests with real-time serviceability, TAT, and dynamic tariff calculation — reducing manual processing time by 70%.',
    ],
  },
  {
    company: 'Kode Klan Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Dec 2024 – 2025',
    current: false,
    highlights: [
      'Developed a full-stack POS and CRM system and an e-commerce platform for restaurants using React.js, Node.js, and MongoDB.',
      'Implemented real-time order tracking and thermal printer integration.',
      'Built a React Native task-management application using Socket.io, SQLite, and JWT authentication.',
      'Developed a flights and packages booking platform with real-time pricing and PayU Hosted payment integration.',
      'Architected a Redux-based e-commerce dashboard with real-time notifications, role-based access control, and a responsive UI using Tailwind CSS.',
    ],
  },
];

export const projects = [
  {
    title: 'Maati',
    summary:
      'Grocery system for the Noida and Delhi dark stores. One catalog behind a storefront, a staff CRM, and a cash till.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'JWT'],
    showcases: [
      {
        title: 'Ecom',
        summary: 'Cash-on-delivery shop with store-scoped coupons.',
        image: '/projects/maati-ecom.svg',
        github: 'https://github.com/RAJHIMANSHUPATEL/Maati-ecom',
        portal: 'https://maati-shop.vercel.app',
      },
      {
        title: 'CRM',
        summary: 'Catalog, stock, orders, and till settings.',
        image: '/projects/maati-crm.svg',
        github: 'https://github.com/RAJHIMANSHUPATEL/Maati-crm',
        portal: 'https://maati-crm.vercel.app',
      },
      {
        title: 'POS',
        summary: 'Cash till for one store, with same-day void and receipt reprint.',
        image: '/projects/maati-pos.svg',
        github: 'https://github.com/RAJHIMANSHUPATEL/Maati-pos',
        portal: 'https://maati-pos.vercel.app',
      },
    ],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Go'],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Django',
      'Django REST Framework',
      'Go / Gin',
      'REST APIs',
      'JWT',
    ],
  },
  {
    title: 'Data & real-time',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'SQLite',
      'MQTT',
      'Socket.io',
      'WebSockets',
    ],
  },
  {
    title: 'Frontend (supporting)',
    items: [
      'React',
      'Next.js',
      'Redux',
      'React Native',
      'Tailwind CSS',
      'shadcn/ui',
      'Material UI',
    ],
  },
  {
    title: 'Tools',
    items: ['Flyway', 'Git', 'Linux'],
  },
];

export const education = {
  degree: 'Bachelor of Technology in Electronics and Communication Engineering',
  school: 'JSS Academy of Technical Education',
  period: '2020 – 2024',
  detail: 'CGPA 7.19 / 10',
};
