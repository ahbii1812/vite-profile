import { useEffect, useState } from "react";
import DATA from "../assets/data.json";

export default function ProgrammingSkills() {
  const [animated, setAnimated] = useState(false);

  const MAX_LEVEL = 5;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="pt-16 pb-32 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h4 className="text-2xl font-bold tracking-tight mb-2">
              Programming Languages
            </h4>
          </div>
          <div className="h-px hidden md:block flex-grow mx-8 mb-4 bg-slate-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {DATA.PROGRAMMING_SKILLS.map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-end mb-3">
                <span className="font-bold text-white group-hover:text-blue-600 transition-colors">
                  {item.skill}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Level {item.level} / {MAX_LEVEL}
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000 ease-out rounded-full"
                  style={{
                    width: animated
                      ? `${(item.level / MAX_LEVEL) * 100}%`
                      : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
