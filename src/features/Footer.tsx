import { Github, Phone, Mail, Linkedin, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-900 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div className="space-y-4">
          <div className="text-2xl font-black text-white tracking-tighter">
            {import.meta.env.VITE_USERNAME}
          </div>
          <p className="text-slate-300 text-sm max-w-xs">
            Open for collaboration on React and React Native projects.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            target="_blank"
            href={import.meta.env.VITE_LINKEDIN}
            className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors text-slate-400 hover:text-white border border-slate-800"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            target="_blank"
            href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
            className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors text-slate-400 hover:text-white border border-slate-800"
          >
            <Phone size={20} />
          </a>
          <a
            target="_blank"
            href={`mailto:${import.meta.env.VITE_EMAIL}`}
            className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors text-slate-400 hover:text-white border border-slate-800"
          >
            <Mail size={20} />
          </a>
          <a
            target="_blank"
            href="https://github.com/ahbii1812"
            className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors text-slate-400 hover:text-white border border-slate-800"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-900 text-center">
        <p className="text-xs text-slate-600 font-mono">
          © 2026 {import.meta.env.VITE_USERNAME?.toUpperCase()} • SINGAPORE /
          MALAYSIA
        </p>
      </div>
    </footer>
  );
}
