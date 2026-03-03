/* ===================================
   Constants & Configuration
   Chakali Narendra - Portfolio
   =================================== */

// ===================================
// PERSONAL INFORMATION
// ===================================
const PERSONAL_INFO = {
   name: 'Chakali Narendra',
   role: 'Full Stack Java Developer',
   email: 'chakalinarendra527@gmail.com',
   phone: '+91 7013665608',
   location: 'Kurnool, Andhra Pradesh',
   github: 'https://github.com/chakali-narendra',
   linkedin: 'https://www.linkedin.com/in/chakali-narendra-616a652a4/',
   instagram: 'https://www.instagram.com/_lovely_narendra_',
   facebook: 'https://www.facebook.com/share/1Wx6PQfEw6/',
   resumeLink: 'Narendra_Resume.pdf',
   profilePic: 'images/profile.png',
   greeting: "Hello, I'm",
   description: `Entry-level Computer Science and Engineering graduate seeking opportunities to apply programming, database, and problem-solving skills in a growth-oriented organization. Strong foundation in Core Java, Advanced Java, SQL, and web technologies with hands-on project experience.`
};

// ===================================
// TYPING ANIMATION TEXTS
// ===================================
const TYPING_TEXTS = [
   'Full Stack Java Developer',
   'Backend Developer',
   'Frontend Enthusiast',
   'Problem Solver',
   'Tech Enthusiast'
];

// ===================================
// PROJECTS DATA
// ===================================
const PROJECTS = [
   {
      id: 1,
      title: 'Food Delivery Web Application',
      description: 'Developed a full-stack Food Delivery Web Application similar to Swiggy/Zomato that allows users to browse restaurants, view menus, add items to cart, place orders, and track order status. The system supports multiple roles including Customer, Restaurant Admin, Delivery Agent, and Super Admin with role-based access control. Implemented secure user authentication (signup & login), dynamic menu management, cart and checkout functionality, order confirmation, and order management using Java Servlets and JSP. Used JDBC for database connectivity and MySQL for persistent storage.',
      image: '',
      icon: 'fas fa-utensils',
      technologies: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Apache Tomcat'],
      liveLink: '',
      githubLink: 'https://github.com/chakali-narendra'
   },
   {
      id: 2,
      title: 'EEG-Based Human Emotions Recognition',
      description: 'Built a deep learning-based system to identify human emotions using EEG datasets. Developed a web application with Django to allow users to log in and analyze emotions. Applied Python-based data processing and model evaluation techniques.',
      image: '',
      icon: 'fas fa-brain',
      technologies: ['Python', 'Django', 'Deep Learning', 'EEG'],
      liveLink: '',
      githubLink: 'https://github.com/chakali-narendra'
   },
   {
      id: 3,
      title: 'Book Management System',
      description: 'Developed a RESTful backend application using Spring Boot to perform CRUD operations on a Book entity. Implemented layered architecture with Controller, Service, and Repository using Spring Data JPA (CrudRepository) for database interaction. Built and tested APIs using standard HTTP methods and integrated MySQL for persistent storage.',
      image: '',
      icon: 'fas fa-book',
      technologies: ['Spring Boot', 'Java', 'MySQL', 'Spring Data JPA', 'REST API'],
      liveLink: '',
      githubLink: 'https://github.com/chakali-narendra'
   }
];

// ===================================
// EXPERIENCE & EDUCATION DATA
// ===================================
const EXPERIENCE = [
   {
      id: 1,
      type: 'work',
      title: 'Full Stack Web Development - Intern',
      organization: 'Tap Academy',
      date: 'July 2025 – Dec 2025',
      description: 'Currently undergoing an internship at Tap Academy, gaining hands-on experience in coding, Core Java, Advanced Java, HTML, CSS. Working on real-world projects, solving coding challenges, and enhancing problem-solving skills.'
   },
   {
      id: 2,
      type: 'education',
      title: 'B.Tech in Computer Science and Engineering',
      organization: 'Sree Rama Engineering College',
      date: 'Nov 2021 – Apr 2025',
      description: 'CGPA: 7.69'
   },
   {
      id: 3,
      type: 'education',
      title: 'Intermediate in MPC',
      organization: 'Dr Jyothirmayi Memorial Junior College, Adoni',
      date: 'Jun 2019 – Apr 2021',
      description: 'Marks: 763/1000'
   },
   {
      id: 4,
      type: 'education',
      title: '10th Grade',
      organization: 'Bhashyam EM High School, Adoni',
      date: 'Jun 2018 – Apr 2019',
      description: 'CGPA: 9.7/10'
   }
];

// ===================================
// CERTIFICATIONS DATA
// ===================================
const CERTIFICATIONS = [
   {
      id: 1,
      title: 'Fullstack Web Development',
      issuer: 'Tap Academy',
      year: '2024',
      icon: 'fas fa-code',
      description: 'Mastered Core Java, Advanced Java (JDBC, J2EE, Servlets), Spring, Hibernate, MySQL, and Frontend Development. Gained hands-on experience in OOP, Collections, Multithreading, Exception Handling, and Java 8 features (Lambda Expressions, Stream API). Applied skills in multiple projects, including a capstone Online Food Delivery application, showcasing full-stack development from database integration to responsive UI design.'
   },
   {
      id: 2,
      title: 'AI-ML Virtual Internship',
      issuer: 'Edu Skills',
      year: '2025',
      icon: 'fas fa-robot',
      description: 'I had successfully completed a 10-week AI-ML virtual internship conducted from Jan to Mar 2025. The program was organized under the AICTE (All India Council for Technical Education) - Eduskills virtual internship initiative, with the curriculum provided by AWS Academy. The internship focused on building practical knowledge and skills in Artificial Intelligence(AI) and Machine Learning, enabling participants to gain hands-on experience with industry-relevant tools, concepts and applications.'
   },
   {
      id: 3,
      title: 'Career Development 3x: Problem Solving And Critical Thinking Skills',
      issuer: 'EdX (FullbridgeX)',
      year: '2024',
      icon: 'fas fa-lightbulb',
      description: 'Earned a professional certificate demonstrating skills in structured problem-solving and critical thinking. Successfully completed and course work designed for workplace application.'
   }
];

// ===================================
// SKILLS DATA
// ===================================
const SKILLS = [
   { name: 'Core Java', icon: 'fab fa-java' },
   { name: 'Advanced Java', icon: 'fab fa-java' },
   { name: 'Spring Boot', icon: 'fas fa-leaf' },
   { name: 'Hibernate', icon: 'fas fa-database' },
   { name: 'Spring Core & MVC', icon: 'fas fa-leaf' },
   { name: 'MySQL', icon: 'fas fa-database' },
   { name: 'MongoDB', icon: 'fas fa-leaf' },
   { name: 'React', icon: 'fab fa-react' },
   { name: 'JavaScript', icon: 'fab fa-js' },
   { name: 'HTML5', icon: 'fab fa-html5' },
   { name: 'CSS3', icon: 'fab fa-css3-alt' },
   { name: 'VS Code & Eclipse', icon: 'fas fa-code' },
   { name: 'IntelliJ', icon: 'fas fa-laptop-code' }
];

// ===================================
// NAVIGATION LINKS
// ===================================
const NAV_LINKS = [
   { name: 'Home', href: '#hero' },
   { name: 'About', href: '#about' },
   { name: 'Projects', href: '#projects' },
   { name: 'Experience', href: '#experience' }, // Maps to Education section in HTML but labeled Experience/Journey
   { name: 'Skills', href: '#skills' },
   { name: 'Contact', href: '#contact' }
];

// ===================================
// ANIMATION SETTINGS
// ===================================
const ANIMATION_CONFIG = {
   typingSpeed: 100,       // milliseconds per character
   erasingSpeed: 50,       // milliseconds per character
   pauseDuration: 2000,    // pause between words
   loaderDuration: 1500    // loader display time
};
