import { motion } from "framer-motion";
import { Code2, MapPinned, PanelsTopLeft, ShieldCheck, Webhook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "../SectionHeader";

type SkillGroup = {
  level: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    level: "Daily use",
    description: "Core tools used to ship current production work.",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS / SCSS", "Tailwind CSS", "Firebase", "Git & GitHub"],
  },
  {
    level: "Comfortable",
    description: "Used independently across client and product projects.",
    skills: ["Node.js", "Express", "PHP", "CodeIgniter 3", "REST APIs", "Firestore Rules", "MySQL", "Figma", "Webpack"],
  },
  {
    level: "Familiar",
    description: "Working knowledge supported by integrations or earlier work.",
    skills: ["AI / Machine Learning", "MongoDB", "Bootstrap", "jQuery", "Stripe / SafePay", "Google Maps API", "QuickBooks API"],
  },
];

const appliedStrengths: Array<{ title: string; detail: string; Icon: LucideIcon }> = [
  { title: "Product UI", detail: "Responsive interfaces, design systems and resilient user states.", Icon: PanelsTopLeft },
  { title: "Secure access", detail: "Authentication, role-based routing and database security rules.", Icon: ShieldCheck },
  { title: "Payment webhooks", detail: "Signed callbacks, idempotency and server-authoritative status.", Icon: Webhook },
  { title: "Maps and tracking", detail: "Location search, route context and live operational views.", Icon: MapPinned },
];

const Skills = () => (
  <section id="skills" className="relative z-10 border-y border-slate-500/25 bg-[#1d2c46]/90 px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <SectionHeader title="Skills" />

      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.level}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-lg border border-slate-700 bg-slate-900/70 p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <Code2 className="h-5 w-5 text-cyan-300" />
              <div>
                <h3 className="font-bold text-white">{group.level}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{group.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md border border-slate-600 bg-slate-800/60 px-3 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {appliedStrengths.map(({ title, detail, Icon }) => (
          <article key={title} className="rounded-lg border border-slate-700 bg-[#111c2e] p-5 transition-colors hover:border-cyan-400/50">
            <Icon className="h-5 w-5 text-amber-300" />
            <h3 className="mt-4 font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
