import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "NeoWasl - Wholesale E-Commerce Platform",
    description:
      "NeoWasl is a modern B2B e-commerce platform I founded to simplify wholesale ordering for small business owners. Built with a full-stack architecture (React, .NET, SQLite), NeoWasl integrates AI and automation features such as smart product recommendations, image-based ordering, and supplier price tracking. My goal is to empower local businesses with a faster, smarter, and more reliable wholesale experience.",
    imageUrl: "/Algaithy-Portfolio/NeoWaslLogo.png",
    gitHubUrl: "https://neowasl.com",
  },
  {
    id: 2,
    title: "Eventia - Event Management App",
    description:
      "An event planning and ticket booking web app, featuring React, MobX, .NET API, and SQL Server.",
    imageUrl: "/Algaithy-Portfolio/EventiaApp.png",
    gitHubUrl: "https://github.com/Ammar-Algaithy/Eventia",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A simple portfolio website showcasing my skills, experience, and projects, built using HTML, CSS, and JS.",
    imageUrl: "/Algaithy-Portfolio/SWebsite.png",
    gitHubUrl: "https://github.com/Ammar-Algaithy/My-portfolio-simple",
  },
  {
    id: 4,
    title: "Predicting Sepsis Survival Outcomes",
    description:
      "Developed a deep learning model using TensorFlow and SHAP to analyze sepsis survival predictions. Compared model performance with academic research.",
    imageUrl: "/Algaithy-Portfolio/PerdictingSepsis.webp",
    gitHubUrl: "PredictingSepsisSurvival.pdf",
  },
  {
    id: 5,
    title: "BankDom 1.0 - Personal Finance Management",
    description:
      "A Python and Flask-based personal finance management system allowing users send 'money' to other users, monitor budgets, and analyze their spendings.",
    imageUrl: "/Algaithy-Portfolio/BankDom.png",
    gitHubUrl: "https://github.com/Ammar-Algaithy/BankDom1.0",
  },
  {
    id: 6,
    title: "SliceLine - Deli & Kiosk Ordering Platform",
    description:
      "SliceLine is a modern deli/kiosk ordering system built with a full-stack architecture (React, Redux Toolkit, .NET, SQL). Designed for local-first operation on mini-PC hubs and Android kiosks, it supports role-based access (cashier, deli worker, admin), real-time cart management, offline resilience, and nightly cloud sync. The project focuses on reliability and usability in high-traffic store environments.",
    imageUrl: "/Algaithy-Portfolio/SliceLine.png",
    gitHubUrl: "https://github.com/Ammar-Algaithy/SliceLine-overview", 
},
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      {/* 🔵 Section Header */}
      <div className="max-w-screen-md mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-white"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>
        <p className="text-gray-400">
          Explore some of the projects that showcase my skills in{" "}
          <span className="font-semibold text-white">Full-Stack Development</span>.
        </p>
      </div>

      {/* 🔹 Projects Grid Layout */}
      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* 🟣 Background Animations */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 opacity-10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 opacity-10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
    </section>
  );
}
