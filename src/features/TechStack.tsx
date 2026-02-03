import { Smartphone, Layout, Server, Code2 } from "lucide-react";
import React, { useMemo } from "react";
import DATA from "../assets/data.json";

export default function TechStack() {
  const getIcon = useMemo(
    () => (itemName: string) => {
      if (itemName === "ReactJS") return <Layout />;
      if (itemName === "NodeJS") return <Server />;
      if (itemName === "Python/Flask") return <Code2 />;
      return <Smartphone />;
    },
    [],
  );
  return (
    <section id="skills" className="pt-32 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Technical Proficiency
          </h2>
          <p className="text-slate-300">
            Specialized in modern web and mobile application development,
            actively expanding into full-stack proficiency through Node.js
            back-end systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {DATA.TECH_STACK.map((skill) => (
            <div
              key={skill.name}
              className="group p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div
                className={`${skill.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                {React.cloneElement(getIcon(skill.name), { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {skill.name}
              </h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
