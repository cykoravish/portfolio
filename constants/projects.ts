export const projects = [
  {
    title: 'NNHire | Job Portal Platform',
    slug: 'nnhire',
    tagline:
      'A production-ready job portal platform with role-based dashboards, built and deployed using DevOps practices.',
    overview:
      'NNHire is a real-world job portal platform developed as a company project. It enables candidates to sign up, build profiles, and apply for jobs, while recruiters can post jobs, manage applications, and track candidates. The platform also includes an admin panel for managing users, jobs, and overall system activity. The application is built using the MERN stack with a strong focus on scalability, performance, and production readiness.',
    features: [
      'Candidate authentication, profile management, and job application flow',
      'Recruiter dashboard for posting jobs and managing applications',
      'Admin panel for platform monitoring and data management',
      'Role-based access control for candidates, recruiters, and admins',
      'Dockerized services for consistent development and deployment',
      'CI/CD pipeline for automated build and deployment on VPS',
    ],
    techStack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'JWT Authentication',
      'Docker',
      'CI/CD Pipelines',
      'Linux VPS',
    ],
    challenges: [
      'Designing scalable database schemas for users, jobs, and applications',
      'Managing role-based access and permissions across the platform',
      'Optimizing backend APIs for performance and scalability',
      'Setting up Docker-based deployment and CI/CD pipelines on a VPS',
    ],
    learnings: [
      'Gained strong experience in backend schema design and API optimization',
      'Learned to deploy and manage production applications on a VPS',
      'Improved understanding of Docker, CI/CD workflows, and release automation',
      'Developed leadership skills while working and coordinating with a team',
    ],
    feedback: false,
    links: {
      live: 'https://nnhire.com',
      github: '',
    },
  },

  {
    title: 'Developer Portfolio | Ravish Bisht',
    slug: 'portfolio',
    tagline:
      'A personal portfolio built and deployed on a VPS to showcase projects, skills, and real-world experience.',
    overview:
      'This portfolio website is a personal project created to present my work, skills, and development journey in a clear and structured way. The UI and layout are inspired by the Next.js documentation style, focusing on readability, simplicity, and performance. The application is built using modern Next.js features with a MongoDB backend and is fully deployed on my own VPS with a custom domain.',
    features: [
      'Dynamic project listing with slug-based routing for detailed project pages',
      'Profile views tracking using backend APIs and database integration',
      'Like (love) feature for basic user interaction',
      'Server actions implemented using modern Next.js features',
      'Responsive and accessible UI inspired by Next.js documentation',
      'Deployed on a self-managed VPS with custom domain configuration',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Radix UI',
      'Linux VPS',
    ],
    challenges: [
      'Designing a clean UI while keeping performance and readability high',
      'Implementing backend APIs for tracking views and interactions',
      'Structuring MongoDB schemas for scalable data handling',
      'Deploying and managing the application on a VPS with domain setup',
    ],
    learnings: [
      'Gained hands-on experience deploying and managing applications on a VPS',
      'Improved understanding of full-stack development with Next.js',
      'Learned to configure domains and manage production environments',
      'Developed better practices for building and maintaining personal projects',
    ],
    feedback: true,
    links: {
      live: 'https://cykoravish.cloud',
      github: 'https://github.com/cykoravish/portfolio',
    },
  },

  {
    title: 'NovaNectar | Company Website',
    slug: 'novanectar',
    tagline:
      'The official company website built from scratch using a Figma design and modern frontend practices.',
    overview:
      'NovaNectar is the official website of the company where I am currently working. I built the website from scratch by converting the provided Figma design into a clean, responsive, and production-ready web application. The project focuses mainly on frontend development, with additional backend features such as an admin panel and blog management system.',
    features: [
      'Pixel-perfect UI built by converting Figma designs into reusable components',
      'Responsive and modern frontend built with Next.js',
      'Admin panel for managing website content and blog posts',
      'Blog system for publishing and updating company content',
      'Optimized performance and clean layout for better user experience',
    ],
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'MongoDB',
    ],
    challenges: [
      'Converting Figma designs into a clean and consistent UI',
      'Maintaining design accuracy across different screen sizes',
      'Building reusable components for long-term maintainability',
      'Adding basic backend features without affecting frontend performance',
    ],
    learnings: [
      'Improved skills in translating Figma designs into real applications',
      'Gained experience building and maintaining company-level frontend projects',
      'Learned to balance design accuracy with performance and usability',
      'Developed better collaboration and ownership skills while working on a live product',
    ],
    feedback: false,
    links: {
      live: 'https://novanectar.co.in',
      github: '',
    },
  },

  {
    title: 'Web Development Practice Platform | LMS (In Progress)',
    slug: 'web-development-practice-platform',
    tagline:
      'A learning platform designed to help users practice JavaScript through hands-on challenges.',
    overview:
      'This is a personal project based on my own idea, focused on building a practical learning platform for web development. The platform is designed to help users improve their JavaScript skills through quizzes, interactive challenges, and structured practice. The goal is to create a useful product that provides real value to learners and can support advanced, paid features in the future.',
    features: [
      'Interactive JavaScript quizzes and practice challenges',
      'User authentication and progress tracking',
      'Planned real-time quiz competitions',
      'Structured learning flow for skill improvement',
      'Planned AI-assisted JavaScript practice features',
    ],
    techStack: ['Next.js', 'JavaScript', 'Node.js', 'MongoDB'],
    challenges: [
      'Designing engaging practice flows for effective learning',
      'Planning scalable architecture for quizzes and user progress',
      'Balancing free and paid features without affecting user experience',
      'Building a product that is useful for learners at different levels',
    ],
    learnings: [
      'Gained experience in planning and designing an LMS-style platform',
      'Improved understanding of building user-focused learning tools',
      'Learned how to structure features for future scalability and monetization',
      'Developed product-thinking and long-term project planning skills',
    ],
    feedback: false,
    links: {
      live: 'https://webdevelopmentpractice.com',
      github: '',
    },
  },
];
