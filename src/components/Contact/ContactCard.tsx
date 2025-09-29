import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  title: string;
  value: string;
  link?: string;
};

const ContactCard = ({ Icon, title, value, link }: Props) => (
  <a
    href={link || "#"}
    target={link ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10 flex items-center gap-4"
  >
    <Icon className="w-6 h-6 text-green-400" />
    <div>
      <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300">{value}</p>
    </div>
  </a>
);

export default ContactCard;
