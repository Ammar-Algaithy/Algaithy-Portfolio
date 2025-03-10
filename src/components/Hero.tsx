import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const HeroSection = () => {
    const texts = ["Fundamental", "Crucial", "Core"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // ✅ Optimized Particles Configuration
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gray-900">
            {/* 🟢 Background Particle Effects */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "transparent" },
                    particles: {
                        number: { value: 80, density: { enable: true, area: 1000 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.4 },
                        size: { value: 3, random: true },
                        move: { enable: true, speed: 0.5, direction: "none", random: false, outModes: { default: "bounce" } },
                        links: { enable: true, color: "#ffffff", distance: 120, opacity: 0.4 },
                    },
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
                    },
                }}
                className="absolute w-full h-full"
            />

            {/* 🟡 Floating Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-10 left-10 text-white text-3xl"
            >
                🚀
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 text-white text-3xl"
            >
                💻
            </motion.div>

            {/* 🔵 Animated Profile Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                className="flex flex-col items-center justify-center relative z-10"
            >
                <motion.img
                    src="/Algaithy-Portfolio/HeadShot2.JPG"
                    alt="Ammar Profile"
                    className="w-40 h-50 md:w-48 md:h-56 object-cover rounded-full shadow-lg border-4 border-indigo-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                />
                <h1 className="text-white text-3xl md:text-5xl font-bold mt-4">
                    Hi, I'm <span className="text-cyan-400">Ammar</span>
                </h1>
                <p className="text-sm md:text-lg text-gray-400 mt-2">
                    Full-Stack Developer | Problem Solver | Tech Enthusiast
                </p>
            </motion.div>

            {/* 🟠 Dynamic Passion Statement */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ amount: 0.3 }}
                className="mt-6"
            >
                <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
                    Passionate about building
                </p>
                <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight text-cyan-400 animate-pulse">
                    {texts[index]} Software Solutions
                </p>
            </motion.div>

            {/* 🎨 Floating SVG Shapes */}
            <motion.svg
                className="absolute top-16 right-20 opacity-20"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                <circle cx="50" cy="50" r="40" stroke="cyan" strokeWidth="2" fill="none" />
            </motion.svg>
            <motion.svg
                className="absolute bottom-16 left-20 opacity-20"
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
                <line x1="10" y1="10" x2="100" y2="70" stroke="lime" strokeWidth="2" />
            </motion.svg>

            {/* 🔴 Background Glow Effects */}
            <div className="absolute w-86 h-86 bg-indigo-600 opacity-30 rounded-full blur-3xl top-1/3 left-1/4"></div>
            <div className="absolute w-70 h-70 bg-cyan-500 opacity-30 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
        </section>
    );
};

export default HeroSection;