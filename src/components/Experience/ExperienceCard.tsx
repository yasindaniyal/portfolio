import { Briefcase } from "lucide-react";

type Props = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const ExperienceCard = ({ title, company, period, description }: Props) => (
  <div className="group rounded-lg border border-slate-700 bg-slate-900/70 p-8 transition-colors duration-200 hover:border-cyan-500/50">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-cyan-300">
          {title}
        </h3>
        <p className="font-semibold text-cyan-300">{company}</p>
      </div>
      <div className="mt-2 flex items-center gap-2 text-slate-400 md:mt-0">
        <Briefcase className="w-4 h-4" />
        <span>{period}</span>
      </div>
    </div>
    <p className="leading-relaxed text-slate-300">{description}</p>
  </div>
);

export default ExperienceCard;
