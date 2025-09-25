import Navbar from "./Navbar";
import HeroSection from "./Hero";
import AboutMeSection from "./About";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import CertificationsSection from "./CertificationsSection";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection />
                <AboutMeSection />
                <ExperienceSection />
                <SkillsSection />
                <CertificationsSection /> 
                <ProjectsSection />
                <ContactSection />
            </main>

            <BackToTop />
            <Footer />
        </div>
    );
};

export default Layout;
