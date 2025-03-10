import { ReactNode } from "react";

interface TabButtonProps {
    children: ReactNode; // Represents JSX content inside the button
    className?: string; // Optional class names for styling
    onClick?: () => void; // Optional click handler function
}

export default function TabButton({ children, className = "", onClick }: TabButtonProps) {
    return (
        <button className={`px-4 py-2 rounded-lg ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
