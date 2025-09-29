import { Briefcase } from "lucide-react";

type Props = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const ExperienceCard = ({ title, company, period, description }: Props) => (
  <div className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-blue-400 font-semibold">{company}</p>
      </div>
      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
        <Briefcase className="w-4 h-4" />
        <span>{period}</span>
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

export default ExperienceCard;
