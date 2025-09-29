
type Props = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({ title, description, technologies}: Props) => (
  <div className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="bg-purple-500/20 px-3 py-1 rounded-full text-sm text-purple-300 border border-purple-500/30"
        >
          {tech}
        </span>
      ))}
    </div>
    {/* <div className="flex gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <Github className="w-5 h-5" /> Code
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <ExternalLink className="w-5 h-5" /> Live
      </a>
    </div> */}
  </div>
);

export default ProjectCard;
