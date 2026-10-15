import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  type?: string;
  index: number;
  highlights?: string[];
  live?: string;
  featured?: boolean;
};

const ProjectCard = ({ title, description, technologies, type, index, highlights, live, featured }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
    viewport={{ once: true, amount: 0.2 }}
    className={`group bg-slate-900/70 p-8 rounded-lg border hover:border-cyan-500/50 transition-colors duration-200 relative overflow-hidden flex flex-col h-full ${featured ? "border-cyan-500/40 md:col-span-2 lg:col-span-3" : "border-slate-800"}`}
  >
    <div className="relative z-10 flex-1 flex flex-col">
      {type && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-fuchsia-400 mb-3">
          {type}
        </span>
      )}
      {featured && (
        <span className="absolute right-0 top-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
          Featured build
        </span>
      )}

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-400 mb-8 leading-relaxed flex-1">{description}</p>

      {highlights && (
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7 text-sm text-gray-300">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="text-emerald-400" aria-hidden="true">✓</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-cyan-500/5 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-emerald-300 hover:text-emerald-200 transition-colors">
          <ExternalLink className="h-4 w-4" /> View live product
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
