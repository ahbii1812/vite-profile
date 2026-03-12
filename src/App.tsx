import Hero from "./features/Hero";
import TechStack from "./features/TechStack";
import WorkingExperiences from "./features/WorkingExperiences";
import Portfolio from "./features/Portfolio";
import ProgrammingSkills from "./features/ProgrammingSkills";
import Footer from "./features/Footer";
import { app } from "./features/FirebaseConfig";
import { getAnalytics } from "firebase/analytics";
import TopNav from "./features/TopNav";
import { useEffect } from "react";
import ChatWidget from "./features/ChatWidget";

if (typeof window !== "undefined") {
  getAnalytics(app);
}

/**
 * Portfolio App for Wejack Law
 * Built for Vite + Tailwind v4
 */
const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navigation */}
      <TopNav />

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

      {/* Floating Chat */}
      <ChatWidget />
    </div>
  );
};

export default App;
