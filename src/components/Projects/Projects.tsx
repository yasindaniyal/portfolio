import { useState } from "react";
import { projects } from "../../data/projects";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="technical-grid relative z-10 bg-[#172238]/90 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Selected Projects" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-7 py-3 font-bold text-cyan-200 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/20"
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : `Show more (${projects.length - 4})`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
