import { useState, useEffect } from "react";
import Hero from "./features/Hero";
import TechStack from "./features/TechStack";
import WorkingExperiences from "./features/WorkingExperiences";
import Portfolio from "./features/Portfolio";
import ProgrammingSkills from "./features/ProgrammingSkills";
import Footer from "./features/Footer";

/**
 * Portfolio App for Wejack Law
 * Built for Vite + Tailwind v4
 */
const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <div className="w-screen bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {import.meta.env.VITE_USERNAME?.toUpperCase()}
          </span>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              target="_blank"
              href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all hover:scale-105 active:scale-95"
            >
              <div className="text-white">Contact Me</div>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Skills */}
      <TechStack />
      <ProgrammingSkills />

      {/* Experience */}
      <WorkingExperiences />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
