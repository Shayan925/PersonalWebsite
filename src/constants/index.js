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
  bash,
  cpp,
  gcp,
  hadoop,
  java,
  kubernetes,
  linux,
  mysql,
  nginx,
  opencv,
  python,
  redis,
  tflow,

  demotic,
  elections,
  cognitive,

  adhd,
  path,
  symptoms,
  threejs,
  mp3player,
  mandelbrot,
  tracker,
  helsinki,
  waterloo,
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
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "testemonials",
  //   title: "Testemonials",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Student Developer",
    icon: web,
  },
  {
    title: "Highly Adaptible",
    icon: mobile,
  },
  {
    title: "Passion for AI & Cloud Computing",
    icon: backend,
  },
  {
    title: "Continual Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Java",
    icon: java,
  },
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
 
];

const education = [
  {
    title: "Bachelor's of Computer Science, Honours Co-op",
    company_name: "University of Waterloo (2023-2028)",
    icon: waterloo,
    points: [
      "President's Scholarship of Distinction",
      "AP Computer Science",
    ],
  },

  {
    title: "Certificate: Perform Foundational Infrastructure Tasks in Google Cloud",
    company_name: "Google (Dec 2021)",
    icon: gcp,
    points: [
      "Set up and managed projects, billing configurations, and IAM roles in the Google Cloud Platform.",
      "Configured network firewall rules and VPN connections.",
      "Configuring autoscaling and load balancing to ensure high availability and scalability.",
    ],
  },

  {
    title: "Certificate: Create and Manage Cloud Resources",
    company_name: "Google (Dec 2021)",
    icon: gcp,
    points: [
      "Configured network resources, including virtual private clouds (VPCs) and subnets.",
      "Configured DNS, HTTP/HTTPS load balancing, and network routing.",
      "Monitored and logged GCP resources and services.",
      "Deployed and managed cloud storage resources, including buckets, objects, and compute engine instances",
    ],
  },
  {
    title: "Certificate: DevOps with Docker",
    company_name: "University of Helsinki (May 2023)",
    icon: helsinki,
    points: [
      "Performed Docker containerization, image management, and deployment techniques, enabling streamlined application delivery and environment consistency.",
      "Used Docker Compose for multi-container application management and familiarized myself with container orchestration tools like Kubernetes for efficient scalability and administration.",
      "Demonstrated Docker networking concepts, including container communication and external service exposure. Adhered to best practices for Docker security, ensuring container isolation and implementing access controls for secure application deployment.",
    ],
  },
  {
    title: "Certificate: Data Privacy Fundamentals",
    company_name: "Cognitive Class (Apr 2023)",
    icon: cognitive,
    points: [
      "Grasped the significance of data privacy and its legal and regulatory implications.",
      "Familiarized myself with the Privacy Act and Personal Information Protection and Electronic Documents Act in Canada.",
      "Implemented privacy-by-design and privacy-by-default approaches in product development.",
    ],
  },
  {
    title: "Certificate: Big Data 101",
    company_name: "Cognitive Class (Apr 2023)",
    icon: cognitive,
    points: [
      "Learned the characteristics and significance of volume, velocity, variety, and veracity (the V's of Big Data).",
      "Covered big data exploration, customer 360 view enhancement, security and intelligence, and operations analysis.",
      "Gained insights into the ecosystem of big data technologies and frameworks. Focused on Apache Hadoop as a prominent solution for processing big data.",
    ],
  },

];

const experiences = [
  
  {
    title: "Information Assistant",
    company_name: "Elections Ontario",
    icon: elections,
    iconBg: "#ffffff",
    date: "June 2022",
    points: [
      "Performed duties in accordance with applicable standards, policies, and regulatory guidelines.",
      "Welcomed voters and demonstrated respect, friendliness and willingness to help wherever needed.",
      "Answered general questions and addressed, resolved or redirected escalated issues to management personnel.",
    ],
  },
  {
    title: "Technical Consultant",
    company_name: "Demotic Design",
    icon: demotic,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Oversaw website development, administered server-side functionality, and managed email hosting service.",
      "Directed a small team of developers while demonstrating excellent communication skills to explain consulting solutions to customers.",
      "Diagnosed and troubleshooted server-side computer issues.",
      "Coordinated and distributed tasks based on each person's skill set to ensure efficient workflow.",
      "Kept up with the latest technology trends and strategies to improve the customer experience and deliver high-quality services.",
    ],
  },

];

const testimonials = [
  
  // {
  //   testimonial:
  //     "Exceeded all expectations with his professionalism, clear communication, and meticulous attention to detail that was invaluable in shaping the success of our projects.",
  //   name: "",
  //   designation: "Consultant",
  //   company: "Demotic Design",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
  
];

const projects = [
  {
    name: "ADHD Aid",
    description:
      "A software application that aims on supporting people with ADHD. The aid refocuses the user upon distraction by tracking the user's eyes and prompting them with an audio/visual notification.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "yellow-text-gradient",
      },
    ],
    image: adhd,
    source_code_link: "https://github.com/Shayan925/ADHD-Aid",
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "A JAR application to visualize A*, Depth first search, and Breadth first search pathfinding algorithms based on points user selects. Includes map modification and further learning resources.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "GUI",
        color: "green-text-gradient",
      },
      {
        name: "Breadth First Search",
        color: "violet-text-gradient",
      },
      {
        name: "Depth First Search",
        color: "violet-text-gradient",
      },
      {
        name: "A*",
        color: "violet-text-gradient",
      },
    ],
    image: path,
    source_code_link: "https://github.com/Shayan925/PathfindingVisualizer",
  },
  {
    name: "Symptom Checker",
    description:
      "A GUI application to diagnose symptoms quickly before visiting a doctor. Uses deep learning models to predict which illness you might have based on the selected symptoms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "Kivy",
        color: "yellow-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
      {
        name: "GUI",
        color: "green-text-gradient",
      },
    ],
    image: symptoms,
    source_code_link: "https://github.com/Shayan925/SymptomChecker",
  },
  {
    name: "MP3 Player",
    description:
      "Arduino Uno and an MP3 shield. It allows you to play audio files in MP3 format from an SD card, providing an interactive and enjoyable audio playback experience.",
    tags: [
      {
        name: "Arduino Uno",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "yellow-text-gradient",
      },
      {
        name: "Audio Amplifier",
        color: "green-text-gradient",
      },

    ],
    image: mp3player,
    source_code_link: "https://github.com/Shayan925/MP3-Player",
  },
  {
    name: "Mandelbrot Explorer",
    description:
      "A tool to explore and view a mandelbrot. Allows you to zoom and control the number of iterations, alongside statistics in the top right corner.",
    tags: [
      {
        name: "C++",
        color: "yellow-text-gradient",
      },
      {
        name: "SFML",
        color: "orange-text-gradient",
      },
      {
        name: "Mathematics",
        color: "pink-text-gradient",
      },

    ],
    image: mandelbrot,
    source_code_link: "https://github.com/Shayan925/MandelbrotExplorer",
  },
  {
    name: "Occupancy Tracker",
    description:
      "Tracks the number of people who enter and leave the room and warns people entering that the occupancy limit has been reached.",
    tags: [
      {
        name: "Object Detection",
        color: "yellow-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },

    ],
    image: tracker,
    source_code_link: "https://github.com/Shayan925/OccupancyTracker",
  },
];

export { services, technologies, education, experiences, testimonials, projects };
