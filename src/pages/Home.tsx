import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeachingStructureSection from "@/components/sections/TeachingStructureSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeachingStructureSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;