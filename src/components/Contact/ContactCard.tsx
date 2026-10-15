import type { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  Icon: LucideIcon;
  title: string;
  value: string;
  link?: string;
};

const ContactCard: React.FC<Props> = ({ Icon, title, value, link }) => {
  return (
    <a
      href={link || "#"}
      target={link?.startsWith("http") ? "_blank" : undefined}
      rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group bg-slate-900/70 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors duration-200 flex items-center gap-4"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cyan-400/10">
        <Icon className="w-5 h-5 text-cyan-300" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-medium text-slate-400">{title}</h3>
        <p className="text-white break-all select-text group-hover:text-cyan-300 transition-colors duration-200">
          <span>{value}</span>
        </p>
      </div>
    </a>
  );
};

export default ContactCard;
