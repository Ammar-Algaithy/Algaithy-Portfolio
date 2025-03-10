import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300); // Show button when scrolled down 300px
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                onClick={() => scroll.scrollToTop({ duration: 600 })}
                className="fixed bottom-5 right-5 bg-cyan-500 p-3 rounded-full shadow-lg hover:bg-cyan-600 transition"
            >
                <FaArrowUp className="text-white text-xl" />
            </button>
        )
    );
}
