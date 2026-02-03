import { Github, Linkedin } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 px-6 overflow-hidden w-full"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] w-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] w-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Open To Work</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            {import.meta.env.VITE_USERNAME} <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            Frontend Developer with 5+ years of experience in{" "}
            <strong>React</strong> & <strong>React Native</strong>, and growing
            expertise in <strong>NodeJS</strong> & <strong>Flask API</strong>.
            Focused on bridging elegant frontend interfaces with robust backend
            architecture. Passionate about clean code and building scalable
            APIs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              target="_blank"
              href={import.meta.env.VITE_LINKEDIN}
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all shadow-xl"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              target="_blank"
              href={import.meta.env.VITE_GITHUB}
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all shadow-xl"
            >
              <Github className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-4xl absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />
          <div className="rounded-4xl relative bg-transparent rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[4/4] flex items-center justify-center">
            <img src={Logo} className="w-128 h-128 text-slate-800" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/5 opacity-80">
              <p className="text-sm font-medium text-slate-300 italic">
                "Passionate about clean code and building scalable APIs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
