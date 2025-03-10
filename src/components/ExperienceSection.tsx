import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const experienceData = [
    {
        role: "Full-Stack Developer",
        company: "Freelance",
        date: "2024 - Present",
        description: "Building scalable web applications using .NET, React, MobX, and Tailwind CSS. Specializing in e-commerce solutions and full-stack development.",
    },
    {
        role: "Software Engineer Intern",
        company: "Tech Startup (Internship)",
        date: "Summer 2024",
        description: "As a Software Development Intern at Merchants Insurance Group, I developed modular backend components to improve system reliability and maintainability. I introduced advanced debugging strategies to streamline issue resolution and enhance overall performance. Additionally, I authored technical and business documentation to facilitate better collaboration between teams. Also, to ensure software quality, I implemented automated testing scripts, improving test coverage and efficiency in the development process."
    },
    {
        role: "Grocery Store Manager & Treasurer",
        company: "Multiple Grocery Stores - NYC",
        date: "2018 - 2023",
        description: "Managed finances, optimized supply chain processes, and led business growth strategies to increase efficiency and sales.",
    },
];

export default function ExperienceSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <section id="experience" className="py-16 px-6 bg-gray-900 text-white overflow-hidden">
            {/* 🟢 Section Header */}
            <motion.h2
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl font-bold text-center"
            >
                💼 My <span className="text-cyan-400">Experience</span>
            </motion.h2>

            {/* 🔹 Experience Timeline */}
            <div className="max-w-4xl mx-auto mt-12 relative border-l-4 border-cyan-500">
                {experienceData.map((exp, index) => {
                    const [itemRef, itemInView] = useInView({ triggerOnce: false, threshold: 0.2 });

                    return (
                        <motion.div
                            key={index}
                            ref={itemRef}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Moves left/right alternately
                            animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative pl-6 pb-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

                            {/* Experience Card */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
                                <p className="text-sm text-gray-300">{exp.company} • {exp.date}</p>
                                <p className="mt-2 text-gray-400">{exp.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* 🔵 Floating Background Effects */}
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
