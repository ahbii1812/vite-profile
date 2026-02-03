import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import DATA from "../assets/data.json";

import { useState } from "react";

type Project = {
  appName: string;
  URL?: string;
  tags: string[];
  shortDescription: string;
  descriptions: Descriptions[];
};

type Descriptions = {
  title: string;
  descriptions: string[];
};

export default function Portfolio() {
  const ProjectCard = (project: Project) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        className={`group relative bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 w-full ${
          isExpanded ? "ring-1 ring-blue-500/20" : ""
        }`}
      >
        {/* <div className="h-48 bg-slate-900 flex items-center justify-center p-12 group-hover:bg-slate-800 transition-colors">
          <div className="text-slate-700 group-hover:text-blue-500 transition-colors duration-500">
            <div className="w-16 h-16 rounded-2xl border-2 border-current flex items-center justify-center">
              <span className="text-2xl font-bold">N</span>
            </div>
          </div>
        </div> */}

        <div className={project.URL ? "p-8 hover:[&_h4]:underline" : "p-8"}>
          <div className="flex justify-between items-start mb-2 items-center">
            <div>
              {project.URL ? (
                <a
                  target="_blank"
                  href={project.URL}
                  className="flex items-center"
                >
                  <h4 className="text-xl font-bold text-white">
                    {project.appName}
                  </h4>
                  <ExternalLink className="mx-3" />
                </a>
              ) : (
                <h4 className="text-xl font-bold text-white">
                  {project.appName}
                </h4>
              )}

              <div className="flex flex-wrap gap-2 py-4">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 -mr-2 text-white hover:text-blue-400 transition-colors rounded-full hover:bg-slate-900"
              aria-label={isExpanded ? "Show less" : "Show more"}
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <p className="text-sm text-slate-300 mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100 mb-6"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-2 pb-2 border-t border-slate-900">
                {project.descriptions.map((item) => (
                  <div>
                    <div className="text-sm mt-4 mb-2 text-blue-500 font-bold">
                      {item.title}
                    </div>
                    <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                      {item.descriptions.map((job) => (
                        <li>{job}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tags */}
        </div>

        {/* External Link Icon */}
        {/* {project.URL && (
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              target="_blank"
              href={project.URL}
              className="block p-2 bg-slate-900/50 backdrop-blur-sm rounded-full"
            >
              <ExternalLink className="text-blue-400" size={18} />
            </a>
          </div>
        )} */}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Portfolio
            </h2>
            <p className="text-slate-400 mt-2">
              Commercial and personal projects
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {DATA.PORTFOLIO.map((project) => ProjectCard(project))}
        </div>
      </div>
    </section>
  );
}
