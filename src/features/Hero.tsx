import { Github, Linkedin } from "lucide-react";
import WJLogo from "./WJLogo";

export default function Hero() {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--hero-x", `${x}%`);
    e.currentTarget.style.setProperty("--hero-y", `${y}%`);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.removeProperty("--hero-x");
    e.currentTarget.style.removeProperty("--hero-y");
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden w-full"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div
          className="space-y-7 hero-left"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Badge */}
          <div className="hero-anim hero-anim-1 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Open To Work</span>
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="font-bold tracking-tight leading-[1.1]"
          >
            {/* Name line */}
            <span className="hero-anim hero-anim-2 hero-hl-name block text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              {import.meta.env.VITE_USERNAME}
            </span>

            {/* Role line — each word animates individually */}
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              <span className="hero-word hero-word-1 inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Frontend-Heavy
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="hero-word hero-word-2 inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fullstack Dev
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-anim hero-anim-4 hero-hl-desc text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed">
            5+ years crafting polished, performant interfaces with{" "}
            <strong>React</strong> &amp; <strong>React Native</strong> —
            while extending into the backend with{" "}
            <strong>Node.js</strong> &amp; <strong>Flask</strong>.
            I care deeply about UX, clean architecture, and shipping
            products that scale end-to-end.
          </p>

          {/* Buttons */}
          <div className="hero-anim hero-anim-5 flex flex-wrap gap-4">
            <a
              target="_blank"
              href={import.meta.env.VITE_LINKEDIN}
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              target="_blank"
              href={import.meta.env.VITE_GITHUB}
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <Github className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
        </div>

        <div
          id="hero-logo"
          data-reveal
          className="reveal reveal-delay-1 relative flex items-center justify-center"
        >
          {/* Ambient glow behind logo */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-purple-600/15 rounded-[3rem] blur-3xl" />
          <WJLogo />
        </div>
      </div>
    </section>
  );
}
