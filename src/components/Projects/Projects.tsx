import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Finest Studio",
    type: "Industry Project",
    description:
      "Developed a modern, responsive studio website with SCSS, mixins, and optimized performance for creative service showcasing.",
    technologies: ["HTML5", "SCSS", "JavaScript"],
  },
  {
    title: "Local Service",
    type: "Industry Project",
    description:
      "Web platform prototype enabling users to browse and book local services with a clean UI and responsive design.",
    technologies: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Property Central",
    type: "Industry Project",
    description:
      "Property listing and management web application with modern UI components, designed for streamlined user experience and scalability.",
    technologies: ["React.js", "SCSS", "MongoDB"],
  },
  {
    title: "Elite Glam",
    type: "Final Year Project",
    // period: "Jul 2024 – Jun 2025",
    description:
      "Centralized web platform for salons and skin aesthetic clinics to connect with customers. Developed Admin, Business, and Customer Dashboards for seamless operations and integrated Firebase Authentication for secure, role-based access.",
    technologies: ["React.js", "Firebase", "Tailwind CSS", "CSS","Node.js","Express.js"],
  },
  {
    title: "Robo App",
    type: "Semester Project",
    // period: "Mar 2024 – Jun 2024",
    description:
      "React-based web application consuming external APIs to fetch and display JSON data. Implemented async/await for efficient asynchronous operations, enhancing overall user experience.",
    technologies: ["React.js", "SCSS", "REST API"],
  },
  {
    title: "Tour Management System",
    type: "Semester Project",
    // period: "Sep 2023 – Jan 2024",
    description:
      "Responsive platform for planning tours, managing bookings, and handling user management. Designed and implemented user-friendly interfaces for improved usability.",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Projects" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
