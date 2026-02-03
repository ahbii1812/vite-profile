import { Briefcase } from "lucide-react";
import DATA from "../assets/data.json";

export default function WorkingExperiences() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <Briefcase className="text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white">Working Experience</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {/* Panasonic */}
          {DATA.JOB_HISTORY.map((item) => {
            return (
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {item.current ? (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                )}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <time className="font-mono text-sm text-slate-300 font-bold">
                      {item.period}
                    </time>
                  </div>
                  <div className="text-xl font-bold text-blue-500">
                    {item.title}
                  </div>
                  <div className="text-white text-sm mb-4">{item.company}</div>
                  <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                    {item.jobScope.map((job) => (
                      <li>{job}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
