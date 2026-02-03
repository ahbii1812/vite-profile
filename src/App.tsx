import Hero from "./features/Hero";
import TechStack from "./features/TechStack";
import WorkingExperiences from "./features/WorkingExperiences";
import Portfolio from "./features/Portfolio";
import ProgrammingSkills from "./features/ProgrammingSkills";
import Footer from "./features/Footer";
import { app } from "./features/FirebaseConfig";
import { getAnalytics } from "firebase/analytics";
import TopNav from "./features/TopNav";

if (typeof window !== "undefined") {
  getAnalytics(app);
}

/**
 * Portfolio App for Wejack Law
 * Built for Vite + Tailwind v4
 */
const App = () => {
  return (
    <div className="w-screen bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
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
    </div>
  );
};

export default App;
