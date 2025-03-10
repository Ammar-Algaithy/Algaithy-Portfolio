import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* 🔹 Brand Name */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-xl font-semibold text-white">Ammar Algaithy</h2>
                    <p className="text-sm text-gray-400">Full-Stack Developer | Innovator 🚀</p>
                </motion.div>

                {/* 🔗 Social Media Links */}
                <div className="flex gap-6 mt-4 md:mt-0">
                    <motion.a
                        href="https://github.com/Ammar-Algaithy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition-all"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/ammar-algaithy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition-all"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaLinkedin />
                    </motion.a>

                    <motion.a
                        href="mailto:algaithy.careerpath@gmail.com"
                        className="text-gray-400 hover:text-white text-2xl transition-all"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaEnvelope />
                    </motion.a>
                </div>
            </div>

            {/* 🔹 Footer Bottom Text */}
            <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
                <p>© {new Date().getFullYear()} Ammar Algaithy. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
