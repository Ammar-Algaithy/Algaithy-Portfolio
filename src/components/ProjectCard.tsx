import { motion } from "framer-motion";

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
        gitHubUrl?: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative flex flex-col md:flex-row items-center bg-gray-800 rounded-xl shadow-lg 
                       border border-gray-700 transition-transform hover:shadow-2xl hover:border-cyan-400 
                       overflow-hidden max-w-4xl mx-auto p-6 gap-6"
        >
            {/* 🟢 Project Image */}
            <div className="w-full md:w-1/3 h-44 md:h-56 rounded-lg overflow-hidden shadow-md">
                <img
                    src={project.imageUrl || "/images/placeholder.png"} // ✅ Use local placeholder if no image
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 🟡 Project Details */}
            <div className="flex flex-col w-full md:w-2/3 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                </p>

                <div className="flex justify-between items-center">
                    {/* 🔵 GitHub Link Button */}
                    {/* 🔵 GitHub Link Button */}
                    {project.id === 4 ? (
                        <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg 
                       transition-all hover:bg-cyan-400 hover:text-gray-900 text-sm">
                            View PDF
                        </a>
                    ) : project.id === 1 ? (
                        <p className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg 
                                       transition-all hover:bg-cyan-400 hover:text-gray-900 text-sm">Please contact me to get access</p>
                    ) : (
                        <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg 
                    transition-all hover:bg-cyan-400 hover:text-gray-900 text-sm">
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
