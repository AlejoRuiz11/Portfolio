/** ============================================================
 *  Portfolio Data - edit this file to update all content.
 *  Admin Panel (bottom-right) lets you add GitHub links,
 *  images, videos and notes to any project.
 *  NOTE: vite.config.js resolves .jsx before .js, so THIS
 *  file (data.jsx) is the one the app actually loads.
 * ============================================================ */

export const personal = {
  name:      'Alejandro Ruiz',
  role:      'Systems Engineering Student · C# / .NET Developer',
  tagline:   'C# / .NET · Software Design · Unity & C# Systems · React · 3 Countries',
  bio:       'Systems Engineering student and software developer whose core strengths are C# / .NET and software design. I build well-structured applications and apply object-oriented design and design patterns where they actually earn their place - to keep code decoupled, testable and easy to extend - rather than for their own sake. A lot of my work is in C# and Unity, building interactive, real-time systems with clean, modular architectures, plus backend services in ASP.NET and Spring Boot. I also build modern web interfaces with React, with deployed, real-world sites to show for it, and I work comfortably in agile Scrum teams. Solid command of C++, Python and SQL, an eye for UX, and international academic experience across Colombia, Argentina and Austria, with coursework conducted fully in English.',
  email:     'alejoruiz1110@gmail.com',
  github:    '',
  linkedin:  '',
  adminPass: 'alejo2024',
}

/** Education */
export const education = [
  {
    id:          'uib',
    institution: 'Universidad de Ibague',
    degree:      'Systems Engineering - Current Student',
    period:      'Colombia',
    note:        'Scholarship: Talento Tolima. Focus on software engineering, architecture and object-oriented design.',
  },
  {
    id:          'itba',
    institution: 'ITBA - Instituto Tecnologico de Buenos Aires',
    degree:      'Exchange Semester',
    period:      'Argentina',
    note:        'Software development and applied computer science coursework.',
  },
  {
    id:          'leoben',
    institution: 'Montanuniversitat Leoben',
    degree:      'Exchange Semester',
    period:      'Austria',
    note:        'Mulgrain Scholarship. Courses taught fully in English.',
  },
  {
    id:          'comfa',
    institution: 'Colegio Comfatolima',
    degree:      'High School Diploma',
    period:      'Colombia',
    note:        '',
  },
]

/** Projects - ordered by relevance to C#/.NET + software engineering */
export const projects = [
  {
    id:        'barbershop',
    title:     'Barbershop Platform - Microservices (C# / .NET + Spring Boot)',
    short:     'Barbershop Microservices Platform',
    desc:      'Barbershop management platform built on a microservices architecture. C# / ASP.NET and Java / Spring Boot services behind a REST API, a React + Vite frontend, and a deliberate set of design patterns (Singleton, DAO/DTO) keeping each service decoupled.',
    longDesc:  'A production-style management platform designed around a microservices architecture, where independent services own their domains (appointments & queue, product catalog, authentication) and communicate over well-defined REST contracts. Backend services are implemented in two stacks running side by side: C# / ASP.NET and Java / Spring Boot, demonstrating polyglot service design against a shared API surface.\n\nThe codebase applies disciplined design patterns end to end: the Singleton pattern manages shared resources and configuration; the DAO (Data Access Object) pattern isolates all persistence behind clean interfaces; and DTOs (Data Transfer Objects) decouple the API contract from internal domain models, keeping each service independently deployable and testable. The React + Vite frontend consumes the REST API for transactional operations (appointments, catalog, inventory) and reflects live queue state for clients and barbers.\n\nThe emphasis throughout is software engineering: separation of concerns, layered architecture (controller -> service -> DAO), and a structure where each service can scale and evolve on its own.',
    tech:      ['C#', 'ASP.NET', 'Spring Boot', 'React', 'Vite', 'Microservices', 'Singleton', 'DTO/DAO', 'REST API', 'Layered Architecture'],
    cat:       'arch',
    star:      'Microservices + .NET',
    highlight: true,
    minor:     false,
    demo:      'https://house-campaz.vercel.app/',
  },
  {
    id:        'faroti',
    title:     'FAROTI - Corporate Web Platform',
    short:     'FAROTI',
    desc:      'Responsive corporate website for a digital-transformation consultancy, with a strong focus on UX, clear content hierarchy and a polished, modern visual identity.',
    longDesc:  'A responsive informational web platform for FAROTI - a consulting firm that helps organizations navigate digital transformation through software solutions. The work centered on front-end development and user experience: clean, semantic markup, careful attention to UX and content hierarchy, responsive layouts across devices, and a modern visual identity that communicates trust. A practical demonstration of building polished, user-facing websites.',
    tech:      ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    cat:       'web',
    star:      'UX-focused web',
    highlight: true,
    minor:     false,
    demo:      'https://www.faroti.com/',
  },
  {
    id:        'duckventure',
    title:     'Duckventure - C# Software Architecture Project',
    short:     'Duckventure',
    desc:      'A C# software project (built on Unity) used as a design-patterns showcase. Implements Factory, Strategy and Serializable architectures across fully modular, extensible, SOLID-compliant systems.',
    longDesc:  'Although it runs as an interactive 3D application, Duckventure is first and foremost a software-engineering exercise in C#. The goal was to apply object-oriented design rigorously inside a complex real-time system: the Factory pattern manages all object instantiation; the Strategy pattern provides swappable, interchangeable behaviors without modifying client code; serializable, data-driven architectures enable configuration and persistence. Every class was designed for single responsibility and open/closed extensibility. The interactive layer is almost secondary - the value is in the architecture, the patterns, and the disciplined C# codebase that drives it.',
    tech:      ['C#', 'OOP', 'SOLID', 'Factory Pattern', 'Strategy Pattern', 'Serialization', 'Unity'],
    cat:       'arch',
    star:      'Design patterns in C#',
    highlight: true,
    minor:     false,
    video:     'https://www.youtube.com/watch?v=LjN_yCsCLLo',
  },
  {
    id:        'attention-chaos',
    title:     'Attention Chaos - Concurrent Real-Time System (C#)',
    short:     'Attention Chaos',
    desc:      'A C# real-time application driven by multi-threading, event pipelines and concurrent simulation systems. Built to practice concurrency and event-driven architecture under a render loop.',
    longDesc:  'Engineered as a real-time concurrent system in C#. Multiple independent threads drive simultaneous effects - audio triggers, visual interrupts, timed events - without blocking the main loop. An event-driven architecture connects the subsystems: each effect type is an independent event producer, and the experience layer is the consumer. The interesting part is the engineering: thread coordination, non-blocking pipelines and a clean producer/consumer separation - the same patterns used in responsive, automation-style software.',
    tech:      ['C#', 'Multi-threading', 'Concurrency', 'Event-Driven Architecture', 'Real-Time Systems', 'Unity'],
    cat:       'sim',
    star:      'Concurrency + threading',
    highlight: false,
    minor:     false,
    video:     'https://www.youtube.com/watch?v=cJmE-muFlaU',
  },
  {
    id:        'laparranda',
    title:     'La Parranda - Distribution Web Platform',
    short:     'La Parranda',
    desc:      'Responsive web platform for a beverage distributor in Ibague, with a browsable product catalog, brand portfolio and a clean, fast UX for wholesale and retail visitors.',
    longDesc:  'A responsive informational web platform for La Parranda, a distributor based in Ibague, Colombia. Built with a focus on front-end development and user experience: a browsable product catalog, clear brand presentation and easy navigation across devices. A practical example of shipping a real, deployed web application.',
    tech:      ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    cat:       'web',
    star:      '',
    highlight: false,
    minor:     false,
    demo:      'https://la-parranda.vercel.app/',
  },
  {
    id:        'searchme',
    title:     'SearchMe - Django Web Platform',
    short:     'SearchMe',
    desc:      'A Django web platform for lost & found reports in university environments, built on a clean REST architecture with serialized API responses and a probabilistic matching module.',
    longDesc:  'SearchMe is a Django web application following a clean REST architecture: serialized API responses, structured models and a layered backend. Its standout feature is a matching module that estimates how likely two reports refer to the same object, factoring in attribute similarity, location overlap and time proximity. The project demonstrates web application development and REST API design, with a focused piece of applied probabilistic logic on top.',
    tech:      ['Django', 'Python', 'REST API', 'PostgreSQL', 'Probabilistic Matching'],
    cat:       'web',
    star:      '',
    highlight: false,
    minor:     false,
    github:    'https://github.com/AlejoRuiz11/SearchMe',
  },
  {
    id:        'dealership',
    title:     'Dealership Management System - Multi-Tier Enterprise App',
    short:     'Dealership System',
    desc:      'Multi-tier enterprise system: React frontend + Spring Boot REST API + Oracle SQL, with a secondary admin client. Singleton, Observer and MVC applied across every layer.',
    longDesc:  'A multi-tier client-server system built to demonstrate cross-tier software architecture. The Spring Boot server implements strict MVC with service/repository layering; the Singleton pattern manages shared resources; the Observer pattern drives cross-client event propagation. The Oracle database was designed with full normalization, ER modeling and relational constraints. Every architectural decision was deliberate - the project was built as much for the design quality as for the functionality, and maps directly to the kind of layered, service-oriented backend used in real engineering teams.',
    tech:      ['Spring Boot', 'React', 'Oracle SQL', 'MVC', 'Singleton', 'Observer', 'REST API', 'OOP'],
    cat:       'arch',
    star:      'Multi-tier · 3 layers',
    highlight: false,
    minor:     false,
  },
  {
    id:        'minishop',
    title:     'Mini Shop - Laravel MVC E-commerce',
    short:     'Mini Shop',
    desc:      'E-commerce web application built with Laravel, following strict MVC architecture with Eloquent ORM, Blade templates and user authentication.',
    longDesc:  'A complete small-scale e-commerce web app. Implements the full MVC stack: Blade views, Eloquent models with relationship definitions, and controller-level request handling. Features user authentication, product catalog and shopping cart. A clean exercise in applying framework conventions, MVC discipline and server-side web development.',
    tech:      ['Laravel', 'PHP', 'MySQL', 'MVC', 'Eloquent ORM', 'Blade'],
    cat:       'web',
    star:      '',
    highlight: false,
    minor:     false,
  },
  {
    id:        'circo',
    title:     'Fuga del Circo Maldito - UX-First Interactive System',
    short:     'Circo Maldito',
    desc:      'A C# / Unity project built for a UI/UX course. All user guidance emerges from design alone - no explicit tutorial - a practical study in interaction affordances and user mental models.',
    longDesc:  'A UX-first project: the design constraint was that the user must always know what to do without any instructional UI. Every affordance, visual cue and spatial arrangement was considered from a user-mental-model perspective - lighting direction, scale and audio cues substitute for interface elements. A concrete exercise in designing under constraint and caring about user experience, backed by a clean C# implementation.',
    tech:      ['C#', 'UI/UX Design', 'Interaction Design', 'Unity'],
    cat:       'sim',
    star:      'UX under constraint',
    highlight: false,
    minor:     false,
  },
  {
    id:        'ml-workshops',
    title:     'ML & Statistics Workshops in R',
    short:     'ML Workshops',
    desc:      'Practical coursework in machine learning using R - SVMs, Naive Bayes, neural networks, K-means clustering and Kohonen Self-Organizing Maps.',
    longDesc:  'Each workshop is a structured implementation and analysis of a different ML technique: Support Vector Machines with kernel methods; Naive Bayes classifiers; multi-layer neural networks with backpropagation; K-means clustering with elbow-method selection; and Kohonen Self-Organizing Maps for unsupervised dimensionality reduction. All include model training, evaluation and interpretation - additional breadth in data and statistics alongside the core software work.',
    tech:      ['R', 'SVM', 'Naive Bayes', 'Neural Networks', 'K-means', 'Statistical Computing'],
    cat:       'ml',
    star:      '',
    highlight: false,
    minor:     true,
    github:    'https://github.com/AlejoRuiz11/artificial-intelligence',
  },
  {
    id:        'pymc-scripts',
    title:     'Bayesian Inference Scripts with PyMC',
    short:     'PyMC Scripts',
    desc:      'Python scripts exploring Bayesian inference and probabilistic modeling with PyMC - priors/posteriors, MCMC sampling and model building.',
    longDesc:  'A collection of Python scripts exploring Bayesian inference and probabilistic modeling using the PyMC library: defining priors, specifying likelihoods, running MCMC sampling and interpreting posterior distributions. A hands-on exploration of probabilistic programming - extra breadth in data and statistics.',
    tech:      ['Python', 'PyMC', 'MCMC', 'Probabilistic Modeling', 'Statistical Computing'],
    cat:       'ml',
    star:      '',
    highlight: false,
    minor:     true,
    github:    'https://github.com/AlejoRuiz11/TestsPyMC',
  },
  {
    id:        'habit',
    title:     'Habit Tracker',
    short:     'Habit Tracker',
    desc:      'Minimalist habit-tracking web app in pure HTML, CSS and vanilla JavaScript - no frameworks, no dependencies.',
    longDesc:  'A lightweight browser-based habit tracker built intentionally without frameworks to practice clean vanilla JavaScript and DOM work. Local persistence via localStorage.',
    tech:      ['HTML', 'CSS', 'JavaScript'],
    cat:       'web',
    star:      '',
    highlight: false,
    minor:     true,
  },
]

/** Skills - software-engineering first, ordered to the role */
export const skills = {
  'Languages & .NET': [
    'C#', '.NET', 'Java', 'C++', 'JavaScript', 'Python', 'SQL', 'PHP', 'R', 'HTML / CSS',
  ],
  'C# & Unity / Real-Time Systems': [
    'Unity', 'C# / .NET', 'Real-Time Systems', 'Multi-threading', 'Concurrency', 'Event-Driven Systems', 'Object Pooling',
  ],
  'Software Design': [
    'Object-Oriented Design', 'SOLID Principles', 'Clean / Layered Architecture',
    'MVC', 'Factory', 'Strategy', 'Observer', 'Singleton', 'Dependency Injection',
  ],
  'Backend & Web': [
    'ASP.NET', 'Spring Boot', 'REST API Design', 'Microservices', 'Django', 'Laravel', 'React', 'Vite',
  ],
  'Workflow & UX': [
    'Agile / Scrum', 'Git', 'Teamwork', 'UI / UX Design', 'Responsive Design', 'Testing',
  ],
  'Databases': [
    'Oracle SQL', 'MySQL', 'PostgreSQL', 'Relational Databases', 'Data Modeling', 'ERD',
  ],
  'Data & ML (supporting)': [
    'Statistical Computing', 'Supervised Learning', 'Unsupervised Learning', 'Naive Bayes', 'Neural Networks', 'PyTorch',
  ],
}

/** Certifications */
export const certifications = [
  {
    id:       'scrum',
    name:     'Scrum Master',
    issuer:   'Online Certification',
    note:     'Scrum framework, sprint planning, retrospectives and agile team facilitation - the workflow used inside modern software teams.',
    relevant: true,
  },
  {
    id:       'pytorch',
    name:     'Foundations and Core Concepts of PyTorch',
    issuer:   'Online Certification',
    note:     'Foundational building blocks of PyTorch: tensors, autograd, neural network modules and training pipelines.',
    relevant: false,
  },
  {
    id:       'bayesian',
    name:     'Bayesian Statistics',
    issuer:   'Online Certification',
    note:     'Probabilistic inference, prior/posterior distributions, Bayesian updating and reasoning under uncertainty.',
    relevant: false,
  },
]

/** Adaptability */
export const adaptability = [
  { icon: '\u{1F30D}', text: 'Studied across three countries - Colombia, Argentina and Austria - comfortable in multicultural and multilingual teams.' },
  { icon: '\u{1F1EC}\u{1F1E7}', text: 'Coursework at Montanuniversitat Leoben conducted fully in English; technical reading and documentation primarily in English.' },
  { icon: '\u{1F91D}', text: 'Experienced working in agile Scrum teams and coordinating software development across international university projects.' },
  { icon: '⚡', text: 'Strong self-learner - independently picked up new languages, frameworks and design patterns outside formal coursework.' },
  { icon: '\u{1F9ED}', text: 'Adaptable, team-oriented and genuinely curious toward new tools, perspectives and ways of working.' },
]

/** Hobbies */
export const hobbies = [
  { icon: '\u{1F3C0}', name: 'Basketball' },
  { icon: '\u{1F3CB}️', name: 'Weightlifting' },
  { icon: '\u{1F3C3}', name: 'Running' },
  { icon: '\u{1F3D3}', name: 'Table Tennis' },
  { icon: '\u{1F3B8}', name: 'Guitar' },
  { icon: '♟️', name: 'Chess' },
  { icon: '✏️', name: 'Drawing' },
]

/** Architecture patterns for Home page showcase */
export const archPatterns = [
  'OOP', 'SOLID', 'Clean Architecture', 'Layered Architecture', 'MVC',
  'Factory', 'Strategy', 'Observer', 'Singleton', 'Dependency Injection',
]
