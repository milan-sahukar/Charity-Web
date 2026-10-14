import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import HeroImage from './assets/Hero.png';
import AboutUs from './pages/About';
import FAQSection from './pages/FAQSection';
import OurMission from './pages/OurMission';
import Programmes from './pages/Programmes';
import { ArrowUp } from 'lucide-react';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const ScrollToTopBtn = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
    aria-label="Scroll to top"
  >
    <ArrowUp size={20} />
  </button>
);

const sectionIds = ['/', '/about', '/mission', '/programmes', '/gallery', '/events', '/volunteer', '/contact'];

function Body() {
  const [activeSection, setActiveSection] = useState('/');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.4, // 40% of section should be visible
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = sectionRefs.current[id];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar activeSection={activeSection} />

      <section id="/" className="">
        <Hero backgroundImage={HeroImage} />
      </section>
      <section id="/about" className="">
        <AboutUs />
      </section>
      <section id="/mission" className="">
        <OurMission />
      </section>
      <section id="/programmes" className="">
        <Programmes />
      </section>
      <section id="/gallery" className="">
        <Gallery/>
      </section>
      <section id="/events" className="">
        <Events/>
      </section>
      <section id="/volunteer" className="">
        <Volunteer/>
      </section>
      <section id="/contact" className="">
        <Contact/>
      </section>
      <Footer/>

      <ScrollToTopBtn />
    </div>
  );
}

export default Body;
