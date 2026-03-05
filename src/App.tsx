import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Endorsement } from "./components/Endorsement";
import { About } from "./components/About";
import { ProjectManagement } from "./components/ProjectManagement";
import { Services } from "./components/Services";
import { ObjectivesVision } from "./components/ObjectivesVision";
import { CoreValues } from "./components/CoreValues";
import { OurTeam } from "./components/OurTeam";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />
      <div className="pt-17 md:pt-19">
        <Hero />
        <Endorsement />
        <About />
        <ProjectManagement />
        <Services />
        <ObjectivesVision />
        <CoreValues />
        <OurTeam />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
