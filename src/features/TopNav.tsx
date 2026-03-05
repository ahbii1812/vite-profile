import { useEffect, useState } from "react";

export default function TopNav() {
  const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span
          data-reveal
          className="reveal text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          {import.meta.env.VITE_USERNAME?.toUpperCase()}
        </span>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              data-reveal
              className={`reveal text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors ${
                index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            target="_blank"
            href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
            data-reveal
            className="reveal reveal-delay-3 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="text-white">Contact Me</div>
          </a>
        </div>
      </div>
    </nav>
  );
}
