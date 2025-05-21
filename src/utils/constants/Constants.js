// Hero Section Data
import bg_1 from "../../assets/images/bg_1.jpg";
import bg_2 from "../../assets/images/bg_2.jpg";
import AboutImage from "../../assets/images/about-1.png";
import AuthorImage from "../../assets/images/author.png";
import DivineImage from '../../assets/images/DivineImage.png'
import Beris from '../../assets/images/Beris.png'
import Kurmato from '../../assets/images/Kurmato.png'
import ITD from '../../assets/images/ITD.png'
import DivineDash from '../../assets/images/DivineDash.png'
import ITDDash from '../../assets/images/ITDDash.png'

// NavItems
export const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "AboutSection" },
  { name: "Our Skills", link: "Skills" },
  { name: "Services", link: "Services" },
  { name: "Projects", link: "Project" },
  { name: "Contact", link: "contact" },
];

// Hero Section Data
export const HeroSectionData = [
  {
    id: 1,
    text: "Building Interactive & Scalable UI",
    heading: "Hi, I am ",
    highlight: "Ritesh Kaloni",
    description: "I specialize in modern front-end development.",
    image: bg_1,
  },
  {
    id: 2,
    text: "Transforming Ideas into Stunning Designs",
    heading: "Hi, I am ",
    highlight: "Ritesh Kaloni",
    description: "Creating seamless user experiences with React.",
    image: bg_2,
  },
];


// Skills Section Data
export const skillsSection = {
  title: "Skills",
  heading: "My Skills",
  subheading:
    "A showcase of my expertise, highlighting the technologies and tools I specialize in. From front-end development to creating seamless user experiences, here are the skills that power my work.",
};

// Skills Data
export const skills = [
  { name: "JavaScript", percentage: 70 },
  { name: "React.js", percentage: 60 },
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 60 },
  { name: "Tailwind Css", percentage: 85 },
  { name: "Bootstrap", percentage: 75 },
  { name: "SEO", percentage: 60 },
  { name: "Git", percentage: 55 },
  { name: "Canva", percentage: 40 },
];

// About Section Data
export const aboutSection = {
  image: AboutImage,
  intro: "My Intro",
  heading: "About Me",
  description:
    "I am a passionate Front-End Developer skilled in JavaScript,React.js and Tailwind CSS.",
  personalInfo: [
    { label: "Name:", value: "Ritesh Kaloni " },
    { label: "DOB:", value: "June 28, 1995" },
    { label: "Address:", value: "Noida, Uttar Pradesh, India" },
    { label: "PinCode:", value: "201301" },
    { label: "Email:", value: "ritesh.kaloni1995@gmail.com" },
    { label: "Phone:", value: "9319014190" },
  ],
  hobbies: [
    { icon: "🌱", name: "Gardening" },
    { icon: "⚽", name: "Sports" },
    { icon: "🎵", name: "Music" },
  ],
};

// Contact Section Data
export const contactContent = {
  sectionBg: "#b1b493",
  title: "Have a project on your mind.",
  description:
    "Let's collaborate to bring your ideas to life. Whether you need a modern website, UI/UX design, or a custom web solution, I'm here to help. Feel free to reach out and discuss your project.",
  buttonText: "Contact me",
  modalTitle: "Contact Me",
  placeholders: {
    name: "John Doe",
    email: "abc@gmail.com",
    message: "Contact us for any queries",
  },
  closeText: "Close",
  sendText: "Send",
  image: {
    src: AuthorImage,
    alt: "Thumbs up",
  },
};

// Services Section Data
export const servicesData = {
  Title: "Services",
  heading: "Solutions We Provide",
  description:
    "Explore my best work in front-end development, UI/UX design, and responsive web apps. Each project is crafted for performance and user experience.",
  placeholder: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive and high-performance websites tailored to your needs.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/code.png",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing designs for digital products.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/design.png",
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Ensuring websites look great and function perfectly across all devices.",
      icon: "https://w7.pngwing.com/pngs/714/980/png-transparent-responsive-web-design-web-development-web-page-responsive-web-design-text-logo.png",
    },
    {
      id: 4,
      title: "Progressive Web Apps",
      description: "Creating web apps with offline functionality and native app-like experiences.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/web.png",
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Improving website visibility and ranking on search engines.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/search.png",
    },
    {
      id: 6,
      title: "E-commerce Development",
      description: "Developing scalable and secure online stores with seamless shopping experiences.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png",
    },
  ],
};

// Projects Section Data
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'DivineZone web',
    technologies: ['Web technologies (front-end and back-end)'],
    description: 'A spiritually focused platform offering resources, community engagement, and e-commerce capabilities for spiritual products and services.',
    services: ['Spiritual resources', 'Community engagement', 'E-commerce functionality'],
    image: DivineImage,
    link: 'https://divinezone.in/',
  },
  {
    id: 2,
    title: 'Beris’ Magic Web',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Testing'],
    description: 'Developed a fully responsive design, improving mobile usability and achieving a 98% cross-device compatibility rate.',
    services: ['Comprehensive testing', 'Optimized product pages', 'Code refactoring'],
    image: Beris,
    link: 'https://berismagic.in/',
  },
  {
    id: 3,
    title: 'Kurmato Web',
    technologies: ['React.js', 'Tailwind CSS', 'CSS'],
    description: 'Transformed responsive design on 10+ critical pages, ensuring a seamless experience across mobile, tablet, and desktop.',
    services: ['Bug fixing', 'Code optimization', 'Scalable component library'],
    image: Kurmato,
    link: 'https://www.kurmato.com/',
  },
  {
    id: 4,
    title: 'ITD Web',
    technologies: ['React.js', 'Tailwind CSS', 'CSS'],
    description: 'Architected complete B2B e-commerce solution from scratch based on Figma design specifications.',
    services: ['Advanced product filtering', 'REST API integration', 'Modular UI component library'],
    image: ITD,
    link: 'https://itdsupercharge.com/',
  },
  {
    id: 5,
    title: 'ITD Admin Dashboard',
    technologies: ['React.js', 'Tailwind CSS', 'REST APIs'],
    description: 'Crafted a comprehensive admin dashboard with 5+ hierarchical user roles, enabling efficient user management.',
    services: ['Role-based access control', 'Complete CRUD operations', 'Responsive dashboard layout'],
    image: ITDDash,
    link: '#',
  },
  {
    id: 6,
    title: 'DivineZone Dashboard',
    technologies: ['React.js', 'Tailwind CSS', 'CSS'],
    description: 'Led ongoing dashboard development after senior developer handoff, implementing 10+ new features to maintain project momentum.',
    services: ['Optimized CRUD functionality', 'Front-end validation', 'API caching and request batching'],
    image: DivineDash,
    link: '#',
  }
];