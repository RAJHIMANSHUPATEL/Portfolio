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

export const selectedWork = [
  {
    title: 'Real-time Ballistic Tracking',
    context: 'Krishworks · Defense / Indian Army',
    stack: ['Go', 'Gin', 'PostgreSQL', 'Flyway', 'MQTT'],
    problem:
      'Low-latency ingestion and processing of ballistic telemetry with reliable hit detection and persistence.',
    impact:
      'Event streaming pipeline for real-time tracking, hit detection, and durable storage under operational constraints.',
  },
  {
    title: 'Delivery Logistics Platform',
    context: 'Krishworks · Logistics',
    stack: ['APIs', 'Courier integrations', 'PostgreSQL', 'Real-time pricing'],
    problem:
      'Unify multiple courier partners behind one system for serviceability, TAT, and tariff decisions at request volume.',
    impact:
      'Integrated 5+ partners including Delhivery and DTDC; handled thousands of requests; cut manual processing time by 70%.',
  },
  {
    title: 'Multiplayer Game Server Optimization',
    context: 'Krishworks · Real-time systems',
    stack: ['Redis', 'PostgreSQL', 'Concurrency'],
    problem:
      'CPU and coordination bottlenecks limited concurrent multiplayer capacity on constrained hardware.',
    impact:
      'Redis-based coordination reduced CPU usage by 35% and enabled 200 concurrent sessions (6 players each) on a 2GB server.',
  },
  {
    title: 'Firebase Cost & Read Optimization',
    context: 'Krishworks · Performance',
    stack: ['Redis', 'Caching', 'Data access patterns'],
    problem:
      'High Firebase read volume drove cost and unnecessary load on the data path.',
    impact:
      'Redis caching and optimized access patterns reduced Firebase read operations by 80%.',
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
