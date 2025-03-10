import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: null, message: "" });

        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        try {
            await emailjs.send(
                "service_aqjxy8y",  // Replace with your actual Service ID
                "template_eu46y9u", // Replace with your actual Template ID
                templateParams,
                "DV-4AFZy1vhr0jkg8" // Replace with your actual Public Key
            );

            setStatus({ type: "success", message: "Message sent successfully! 🚀" });
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        } catch (error) {
            setStatus({ type: "error", message: "Something went wrong. Please try again." });
        }
    };



    return (
        <section id="contact" className="mt-12 py-14 px-6 bg-gray-900 text-white overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-3xl font-bold mb-6 text-center"
            >
                📩 Get in <span className="text-cyan-400">Touch</span>
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
            >
                <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">Name</label>
                    <motion.input
                        whileFocus={{ scale: 1.05, borderColor: "#06b6d4" }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <motion.input
                        whileFocus={{ scale: 1.05, borderColor: "#06b6d4" }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">Subject</label>
                    <motion.input
                        whileFocus={{ scale: 1.05, borderColor: "#06b6d4" }}
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">Message</label>
                    <motion.textarea
                        whileFocus={{ scale: 1.05, borderColor: "#06b6d4" }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg h-28 focus:outline-none"
                    />
                </div>

                {status.type && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-sm mt-2 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                        {status.message}
                    </motion.p>
                )}

                <motion.button whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-cyan-500 text-gray-900 font-bold py-2 rounded-lg transition-all">
                    Send Message 🚀
                </motion.button>
            </motion.form>
        </section>
    );
}
