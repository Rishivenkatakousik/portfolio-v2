import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rishi venkata kousik",
  initials: "RK",
  url: "https://portfolio-rishikoushik.vercel.app",
  description:
    "Rishi | Fullstack Web Developer, who loves Building Scalable Web Applications",
  location: "Guntur, India",
  locationLink: "https://www.google.com/maps/place/Guntur",
  avatarUrl: "/assets/icons/ai.jpg",
  skills: [
    {
      name: "HTML",
      icon: "html.svg",
    },
    {
      name: "CSS",
      icon: "css.svg",
    },
    {
      name: "JavaScript",
      icon: "javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "typescript.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind.svg",
    },
    {
      name: "React JS",
      icon: "react.svg",
    },
    {
      name: "Next JS",
      icon: "next.svg",
    },
    {
      name: "Node JS",
      icon: "node.svg",
    },
    {
      name: "Express JS",
      icon: "express.svg",
    },
    {
      name: "MongoDB",
      icon: "mongodb.svg",
    },
    {
      name: "Firebase",
      icon: "firebase.svg",
    },
    {
      name: "Docker",
      icon: "docker.svg",
    },
    {
      name: "AWS",
      icon: "aws.svg",
    },
    {
      name: "git",
      icon: "git.svg",
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "koushikrishi23@gmail.com",
    tel: "9550711886",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rishivenkatakousik",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishi-venkata-kousik",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:koushikrishi23@gmail",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "ExaltRide",
      href: "https://www.exaltride.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/assets/icons/exaltride.PNG",
      start: "Jan 2026",
      end: "Present",
      description: [
        "Developed and shipped the MVP UI from Figma designs into responsive, production-ready React components.",
        "Integrated multiple RESTful APIs with secure authentication, dynamic rendering, and robust error handling.",
        "Improved frontend performance by 35% using reusable components, lazy loading, and code-splitting strategies.",
        "Collaborated with backend engineers and product teams to rapidly deliver features for successful MVP launch.",
      ],
    },
    {
      company: "Qorvia technologies",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer",
      logoUrl: "/assets/icons/qorvia.jpg",
      start: "June 2025",
      end: "Aug 2025",
      description: [
        "Led development of  frontend of a Property Management SaaS with dedicated dashboards for tenants, landlords, and maintainers.",
        " Built a geolocation feature using Mapbox and Next.js, increasing accuracy of property location input by 95% and reducing manual address corrections.",
        " Implemented dynamic role-based interfaces, enhancing usability for tenants, landlords, and admins.",
        " Enhanced product usability by adding multi-format data export options (PDF, Excel, clipboard copy), improved reporting efficiency by 40%.",
      ],
    },
    {
      company: "Rupeia",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/assets/icons/rupeia_logo.jpeg",
      start: "Sept 2025",
      end: "Oct 2025",
      description: [
        "Designed and implemented RESTful Blog APIs with Node.js, Express, and MongoDB, including authentication, validation, and robust error handling.",
        " Built real-time payment processing using Razorpay WebSockets through an event-driven architecture to reduce backend load.",
        " Refactored a Django-based web scraper for faster data extraction and added SEO-friendly slug generation for news articles.",
        " Developed scalable file upload and storage APIs with AWS S3, improving media handling through optimized file processing and caching.",
      ],
    },
  ],
  education: [],
  projects: [
    {
      title: "Weavy.ai",
      desc: [
        "Built a node-based AI workflow builder with drag-and-drop pipeline creation using Next.js and React Flow.",
        "Implemented 6+ custom nodes with dynamic connections for visually designing modular AI workflows.",
        "Designed a DAG-based execution engine with validation and dependency-aware task scheduling.",
        "Enabled parallel node execution using Trigger.dev, reducing workflow runtime by up to 50%.",
        "Integrated FFmpeg-powered media processing for automated frame extraction and image transformations.",
      ],
      techStack: ["Next.js", "TypeScript", "React Flow", "PostgreSQL", "Trigger.dev", "FFmpeg"],
      websiteURL: "https://weavy-ai-alpha.vercel.app/",
      githubURL: "https://github.com/Rishivenkatakousik/Weavy.ai",
      imgURL: "weavy.png",
    },
    {
      title: "KrishiBazar",
      desc: [
        "Built a responsive e-commerce platform for agricultural products using React, ensuring seamless usability across all devices.",
        "Implemented complete shopping workflows including product listing, cart management, checkout, and order confirmation via RESTful APIs.",
        "Integrated secure authentication, role-based authorization, and Razorpay payment gateway to support real-time transactions.",
        "Designed reusable UI components and clean frontend architecture, reducing feature development time and improving maintainability.",
      ],
      techStack: ["React JS", "Zustand", "Node JS", "MongoDB", "Tailwind CSS"],
      websiteURL: "https://krishi-bazar-beta.vercel.app/",
      githubURL: "https://github.com/Rishivenkatakousik/KrishiBazar",
      imgURL: "krishibazar.webp",
    },
    {
      title: "Agency.ai",
      desc: [
        "Developed a modern, responsive agency landing page using React with full cross-device compatibility.",
        "Built modular and reusable React components for core sections such as hero, services, portfolio, team, and contact.",
        "Optimized UI/UX and page layout to improve user engagement and overall performance during usability testing.",
        "Deployed the application following modern frontend best practices, ensuring fast load times and clean component architecture.",
      ],
      techStack: ["React JS", "JavaScript", "Tailwind CSS"],
      websiteURL: "https://agency-ai-two-navy.vercel.app/",
      githubURL: "https://github.com/Rishivenkatakousik/agency-ai",
      imgURL: "agency.webp",
    },
    {
      title: "Nexus Chat",
      desc: [
        "Developed a real-time chat platform with Next.js supporting individual messaging.",
        "Integrated Pusher Channels eliminating the need for complex manual websocket management, enabling instant message delivery and real-time updates.",
        "Optimized Redis for caching and persistence, enabling faster retrieval of recent conversations.",
        "Implemented robust input validation using Zod, ensuring strict type-safety and real-time error handling across chat forms.",
      ],
      techStack: [
        "Next JS",
        "Redis",
        "Pusher",
        "Zod",
        "Tailwind CSS",
        "Docker",
      ],
      websiteURL: "https://rishikousik.space/",
      githubURL: "https://github.com/Rishivenkatakousik/chat-app",
      imgURL: "chat.png",
    },
    {
      title: "Bazario",
      desc: [
        "Developed a responsive e-commerce platform with product catalog, shopping cart, and secure checkout.",
        "Integrated payment gateway and user authentication for a seamless shopping experience.",
        "Built an admin dashboard for product, order, and inventory management.",
        "Integrated real-time search, filtering, and a shopping cart for a smooth user experience.",
      ],
      techStack: [
        "React JS",
        "Redux",
        "Node JS",
        "MongoDB",
        "Tailwind CSS",
        "Shadcn",
      ],
      websiteURL: "https://deploy-shop-1-qyy9.onrender.com/shop/home",
      githubURL: "https://github.com/Rishivenkatakousik/Ecommerce",
      imgURL: "Bazario.png",
    },
    {
      title: " School Management Dashboard",
      desc: [
        "Built a centralized school management dashboard to streamline student, teacher, and administrative activities in one platform.",
        "Integrated teacher and parent portals for better communication, performance tracking, and progress reports.",
        "Implemented role-based access control to ensure secure and personalized dashboards for administrators, teachers, parents, and students.",
      ],
      techStack: ["Next.js", "React JS", "Tailwind CSS"],
      websiteURL:
        "https://school-mangement-dashboard.vercel.app/admin",
      githubURL:
        "https://github.com/Rishivenkatakousik/school-mangement-dashboard",
      imgURL: "school.png",
    },
  ],
} as const;
