import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";

const BASE = import.meta.env.BASE_URL; 

const certifications = [
  {
    id: 1,
    title: "Intro to Cybersecurity",
    issuer: "CodePath",
    issueDate: "Fall 2023",
    thumbUrl: `${BASE}CodePathCyberCert.png`,
    fileUrl:  `${BASE}CodePathCyberCert.png`,
    skills: ["Security", "Networking", "Foundations"],
  },
  {
    id: 2,
    title: "Introduction to Cloud Computing",
    issuer: "IBM / Coursera",
    issueDate: "Jan 2024",
    thumbUrl: `${BASE}CourseraCloudCert.png`,
    fileUrl:  `${BASE}CourseraCloudCert.png`,
    skills: ["Cloud", "IaaS", "PaaS"],
  },
  {
    id: 3,
    title: "Introduction to Web Development",
    issuer: "IBM / Coursera",
    issueDate: "Jan 2024",
    thumbUrl: `${BASE}CourseraIntroToWebDev.png`,
    fileUrl:  `${BASE}CourseraIntroToWebDev.png`,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Programming in Python",
    issuer: "Meta / Coursera",
    issueDate: "Nov 2023",
    thumbUrl: `${BASE}CourseraPythonCert.png`,
    fileUrl:  `${BASE}CourseraPythonCert.png`,
    skills: ["Python", "OOP", "Scripting"],
  },
  {
    id: 5,
    title: "Getting Started with Git & GitHub",
    issuer: "IBM / Coursera",
    issueDate: "Jan 2024",
    thumbUrl: `${BASE}git.png`, // small badge as preview
    fileUrl:  `${BASE}CourseraGitCert.pdf`,
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    id: 6,
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    issueDate: "Sep 2025",
    thumbUrl: `${BASE}OSBasics.png`,
    fileUrl:  `${BASE}Algaithy_Operating_Systems_Basics_certificate.pdf`,
    skills: ["Windows", "Linux", "Security", "Mobility"],
  },
  {
    id: 7,
    title: "SQL Programming",
    issuer: "LinkedIn Learning",
    issueDate: "Sep 2025",
    thumbUrl: `${BASE}sql.png`, // preview icon will fallback
    fileUrl:  `${BASE}CertificateOfCompletion_Learning SQL Programming.pdf`,
    skills: ["SQL", "Databases", "Queries"],
  },
];


export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-gray-900 relative">
      <div className="max-w-screen-md mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-white"
        >
          <span className="text-cyan-400">Certifications</span>
        </motion.h2>
        <p className="text-gray-400">
          A selection of credentials and certificates I’ve earned.
        </p>
      </div>

      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {certifications.map((c) => (
          <CertificationCard key={c.id} cert={c} />
        ))}
      </div>

      {/* ambient blobs (optional) */}
      <motion.div
        className="pointer-events-none absolute top-10 left-10 w-40 h-40 bg-cyan-400 opacity-10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 opacity-10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
    </section>
  );
}
