import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-md">
            <div className="container mx-auto flex justify-center items-center h-16 px-4 relative">
                {/* Desktop Navigation: Centered */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            duration={600}
                            offset={-64}
                            className="cursor-pointer text-white text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:text-cyan-400"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="fixed md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            // X icon for close menu
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger icon for open menu
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900">
                    <div className="flex flex-col items-center">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={600}
                                offset={-64}
                                onClick={toggleMenu} // Close menu on click
                                className="block px-4 py-2 text-white text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:text-cyan-400"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
