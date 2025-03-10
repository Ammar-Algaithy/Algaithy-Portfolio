import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutMeSection() {
    return (
        <section id="about" className="pt-24 px-6 bg-gray-900 text-white overflow-hidden">
            {/* 🟢 Section Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-4xl font-bold text-center"
            >
                About <span className="text-cyan-400">Me</span>
            </motion.h2>

            {/* 🔹 About Me Content */}
            <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mt-12 bg-gray-800 p-10 rounded-xl shadow-lg">
                {/* 🟡 Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-left max-w-xl"
                >
                    <h3 className="text-3xl font-bold mb-4 text-cyan-400">Hi, I'm Ammar! 👋</h3>
                    <p className="text-md text-gray-300 leading-relaxed">
                        I am a dedicated software engineer specializing in full-stack development and API engineering.
                        With expertise in .NET, React, TypeScript, Java, Python, Flask, and tailwind css, I build scalable, high-performance web applications and RESTful APIs.
                        I focus on writing clean, maintainable code and crafting seamless user experiences.
                    </p>
                    <p className="text-md text-gray-300 leading-relaxed mt-4">
                        Beyond development, I have experience in machine learning, building predictive models like a sepsis survival analysis system and a competitor price tracking tool.
                        I thrive on solving complex problems, optimizing performance, and continuously learning new technologies to create efficient and impactful software solutions.
                    </p>
                </motion.div>

                {/* 🟡 Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative"
                >
                    <img
                        src="/Algaithy-Portfolio/HeadShot2.JPG" // Replace with your actual image
                        alt="Ammar Profile"
                        className="w-48 h-56 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
                    />
                </motion.div>
            </div>

            {/* 🔵 Social Media Cards */}
            <div className="flex justify-center gap-6 mt-8">
                {/* GitHub Card */}
                <motion.a
                    href="https://github.com/Ammar-Algaithy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gray-700 w-32"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaGithub className="text-3xl text-gray-300 mb-2" />
                    <p className="text-sm font-bold">GitHub</p>
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                    href="https://www.linkedin.com/in/ammar-algaithy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gray-700 w-32"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaLinkedin className="text-3xl text-gray-300 mb-2" />
                    <p className="text-sm font-bold">LinkedIn</p>
                </motion.a>
            </div>

            {/* 🎨 Floating Background Effects */}
            <motion.div
                className="absolute w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl top-1/4 left-1/3"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-80 h-80 bg-cyan-500 opacity-20 rounded-full blur-3xl bottom-1/4 right-1/4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
        </section>
    );
}
