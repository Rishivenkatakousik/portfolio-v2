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
      company: "Qorvia technologies",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer",
      logoUrl: "/assets/icons/qorvia.jpg",
      start: "June 2025",
      end: "Sept 2025",
      description: [
        "Led development of  frontend of a Property Management SaaS with dedicated dashboards for tenants, landlords, and maintainers.",
        " Built a geolocation feature using Mapbox and Next.js, increasing accuracy of property location input by 95% and reducing manual address corrections.",
        " Implemented dynamic role-based interfaces, enhancing usability for tenants, landlords, and admins.",
        " Enhanced product usability by adding multi-format data export options (PDF, Excel, clipboard copy), improved reporting efficiency by 40%.",
      ],
    },
  ],
  education: [],
  projects: [
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
      title: "Smart Voyage",
      desc: [
        "Developed an AI-powered travel planner that generates personalized itineraries based on user preferences such as budget, duration, and interests.",
        "Integrated third-party APIs (Google Maps) to provide real-time travel data, accommodations, routes, and weather conditions.",
        "Optimized itinerary generation algorithms for route planning, time management, and cost efficiency, ensuring a balance between travel convenience and budget constraints.",
      ],
      techStack: ["React JS", "Firebase", "Node JS", "Express JS", "Shadcn"],
      websiteURL: "https://travel-one-lime.vercel.app/",
      githubURL: "https://github.com/Rishivenkatakousik/Ai-Trip-Planner",
      imgURL: "sma.png",
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
        "https://school-mangement-dashboard-mfngplzrl.vercel.app/admin",
      githubURL:
        "https://github.com/Rishivenkatakousik/school-mangement-dashboard",
      imgURL: "school.png",
    },
  ],
} as const;
