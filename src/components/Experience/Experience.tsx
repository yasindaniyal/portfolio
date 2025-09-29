import SectionHeader from "../SectionHeader";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Frontend & UI/UX Developer",
    company: "Sceptrum ",
    period: "Jan 2025 – Present",
    description:
      "Engineered pixel-perfect, responsive layouts in collaboration with designers using Figma. Developed interfaces with HTML5, SCSS, and JavaScript, integrating REST APIs for seamless user experiences. Built reusable components and SCSS mixins to improve scalability and responsiveness. Utilized Git for version control and team collaboration.",
  },
  {
    title: "Frontend Developer",
    company: "Aarsol, Islamabad, Pakistan",
    period: "Jul 2023 – Apr 2024",
    description:
      "Delivered pixel-perfect, responsive web interfaces with HTML5, SCSS, and JavaScript, ensuring cross-browser consistency. Translated UI/UX designs into high-quality code, optimized frontend performance, and enhanced component reusability to reduce load times and improve scalability.",
  },
  {
    title: "MERN Stack Intern",
    company: "Cloud-tek, Islamabad, Pakistan",
    period: "Jun 2022 – Sep 2022",
    description:
      "Designed responsive layouts with CSS Flexbox and positioning techniques. Strengthened React.js skills through state management, hooks, and reusable components. Built scalable RESTful APIs with Node.js and Express.js to support multiple projects.",
  },
];


const Experience = () => (
  <section id="experience" className="py-20 px-6 bg-gray-800/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Experience" />
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
