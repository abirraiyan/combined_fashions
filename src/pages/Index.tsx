import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Timeline from "@/components/Timeline";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Timeline />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
