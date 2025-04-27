import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume"; // Added import for Resume component

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Resume /> {/* Added Resume component */}
      <Blog />
      <HireMe />
      <Contact />
    </main>
  );
};

export default Home;