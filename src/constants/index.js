import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  materialui,
  bootstrap,
  beanbyte,
  freelancer,
  invoiceapp,
  ecommerce,
  aaieg,
  movieApp,
  nextJs,
  advancedstructuresindia,
  anedyaSystems,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Advanced Structures India",
    icon: advancedstructuresindia,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Current",
    points: [
      "Developed a search page with optimized search functionality utilizing debounce and integrated QR codescanning capability.",
      "Integrated lazy loading to optimize image loading within the media and customer view page, enhancing performance",
      "Implemented Datagrid for tables with server-side pagination, search, and filtering capabilities, coupled with form validation using Formik and Yup.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Advanced Structures India",
    icon: beanbyte,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Developed single-page web applications Customer Relationship Management(CRM) using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented performance optimizations, including code splitting and lazy loading techniques, resulting in significantly reduced initial load times and an overall improved user experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "ReactJs Developer (Paid Freelance)",
    company_name: "Anedya Systems",
    icon: anedyaSystems,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Designed and developed a single-page web app for the Anedya Systems (ReactJS, Redux, Router, ES6 )",
      " Integrated JSON Web Tokens (JWT) to handle both authentication and authorization, google reCAPTCHA validation ensuring secure access control and safeguarding sensitive data from unauthorized access",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed and implemented interactive data graphs, enabling real-time data analysis and enhancing decision-making capabilities, resulting in a 40% increase in data-driven insights",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As a fresher, Manvendra's eagerness to learn and adapt in a fast-paced environment has been remarkable.",
    name: "Lokesh Kumar",
    designation: "CEO",
    company: "Beanbyte Software",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Manvendra's dedication to delivering pixel-perfect designs and their enthusiasm for front-end technologies make them a valuable addition to any team.",
    name: "Kunal Goyal",
    designation: "Frontend Developer",
    company: "Beanbyte Software",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I appreciated Manvendra's fresh ideas and their ability to bring them to life on the frontend.",
    name: "Sushil Kumar",
    designation: "CEO",
    company: "Tanil Solutions",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Movie App",
    description:
      "Movie-App is a NextJS-based movie website that allows users to search for movies by title, sort them by genre, view trending movies, and bookmark their favorite movies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieApp,
    source_code_link: "https://github.com/itsmanvendra/movie-listing-app",
  },
  {
    name: "Ecommerce Website",
    description:
      "Developed e-commerce with Google authenticated security and an intuitive cart/wishlist interface, delivering seamless item management for better experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/itsmanvendra/mini-ecommerce",
  },
  {
    name: "Invoice App",
    description:
      "Created an invoice app with user-friendly features and strong security. Improved user experience through smart design and secure authentication methods.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: invoiceapp,
    source_code_link: "https://github.com/itsmanvendra/invoice-generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
