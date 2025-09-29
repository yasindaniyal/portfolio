// src/components/Skills/Skills.tsx
import React from "react";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import SectionHeader from "../SectionHeader";

// Main skill bars
const skillBars = [
  {
    skill: "UI/UX Development",
    level: 95,
    icon: <FaFigma size={30} color="#F24E1E" />,
  },
  { skill: "React.js", level: 90, icon: <FaReact size={30} color="#61DBFB" /> },
  { skill: "SCSS", level: 90, icon: <FaCss3Alt size={30} color="#CD6799" /> },
  {
    skill: "JavaScript",
    level: 85,
    icon: <FaHtml5 size={30} color="#F7DF1E" />,
  },
  {
    skill: "Node.js & Express.js",
    level: 80,
    icon: <FaNodeJs size={30} color="#68A063" />,
  },
  {
    skill: "MongoDB",
    level: 75,
    icon: <FaDatabase size={30} color="#4DB33D" />,
  },
];

// Tech badges
const techs = [
  {
    name: "Pixel-perfect",
    icon: <FaCode size={24} color="#FF6F61" />,
    description: "Implementing precise and accurate UI designs.",
  },
  {
    name: "Figma",
    icon: <FaFigma size={24} color="#F24E1E" />,
    description: "Designing and prototyping user interfaces.",
  },
  {
    name: "Firebase Authentication",
    icon: <SiFirebase size={24} color="#FFCA28" />,
    description: "Secure user authentication and management.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={24} color="#563d7c" />,
    description: "Building responsive and mobile-first websites.",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt size={24} color="#F1502F" />,
    description: "Version control and collaboration using Git.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={24} color="#38B2AC" />,
    description: "Rapid styling with utility-first CSS framework.",
  },
  {
    name: "RESTful APIs",
    icon: <FaServer size={24} color="#F97316" />,
    description: "Designing and consuming RESTful APIs.",
  },
  {
    name: "Docker",
    icon: <FaDocker size={24} color="#0db7ed" />,
    description: "Containerization for consistent development and deployment.",
  },
];

// SkillBar component
const SkillBar = ({
  skill,
  level,
  icon,
}: {
  skill: string;
  level: number;
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col">
    <div className="flex items-center mb-1">
      <div className="mr-2">{icon}</div>
      <span className="text-white font-semibold">{skill}</span>
      <span className="ml-auto text-white">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

// TechBadge component
const TechBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 bg-gray-700/50 text-white px-4 py-2 rounded-full shadow-sm hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
    {icon}
    <span>{name}</span>
  </div>
);

// Main Skills component
const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-gray-800/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Skills" />

      <div className="flex flex-col md:flex-row gap-12">
        {/* Skill Bars */}
        <div className="flex-1 space-y-6">
          {skillBars.map((item) => (
            <SkillBar key={item.skill} {...item} />
          ))}
        </div>

        {/* Skills Cards */}
        <div className="flex-1 flex flex-wrap gap-6 items-start">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col justify-between bg-white/5 backdrop-blur-md text-white p-5 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-[48%] md:w-full lg:w-[45%]"
            >
              <div className="flex items-center gap-3 mb-3">
                {tech.icon}
                <span className="font-semibold text-lg">{tech.name}</span>
              </div>
              <p className="text-gray-300 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
