import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";

const skillsData = [
    { name: "🖥️ Languages", skills: ["C#", "Python", "TypeScript", "JavaScript", "Java", "SQL"] },
    { name: "🛠️ Web & API", skills: [".NET 8", "ASP.NET Core", "RESTful APIs", "Flask", "Razor/MVC", "WCF"] },
    { name: "🗄️ Databases", skills: ["SQL Server", "SQLite", "Entity Framework", "SSIS", "SSRS"] },
    { name: "🎨 Frontend", skills: ["React.js", "MobX", "Tailwind CSS", "HTML5 & CSS"] },
    { name: "🔐 Security", skills: ["ASP.NET Identity", "JWT Authentication", "Cybersecurity", "Data Encryption"] },
    { name: "🤝 Soft Skills", skills: ["Communication", "Problem-Solving", "Project Management", "Adaptability", "Leadership"] },
];

export default function SkillsSection() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); // ✅ Default to first category

    return (
        <section id="skills" className="py-12 px-6 text-center bg-gray-900">
            {/* 🔵 Scroll-in Animation for Header */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-3xl font-bold mb-6 text-white"
            >
                💡 My <span className="text-cyan-400">Skills</span>
            </motion.h2>

            {/* 🔹 Scroll-Triggered Skill Categories */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex justify-center flex-wrap gap-3 mb-6"
            >
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <TabButton
                            className={`transition-all px-4 py-2 rounded-lg text-sm font-medium 
                                        ${selectedIndex === index ? "bg-blue-500 text-white shadow-lg"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            {category.name}
                        </TabButton>
                    </motion.div>
                ))}
            </motion.div>

            {/* 🟡 Skills Display with Scroll Animations */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative mt-6 bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto text-white"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold mb-3">
                            {skillsData[selectedIndex].name}
                        </h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {skillsData[selectedIndex].skills.map((skill) => (
                                <motion.li
                                    key={skill}
                                    className="relative bg-gray-700 p-2 rounded-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: Math.random() * 0.2 }}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* 🔵 Floating Background Glow Effects */}
            <motion.div
                className="absolute w-96 h-96 bg-indigo-600 opacity-30 rounded-full blur-3xl top-1/3 left-1/4"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-80 h-80 bg-cyan-500 opacity-30 rounded-full blur-3xl bottom-1/4 right-1/4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />


        </section>
    );
}
