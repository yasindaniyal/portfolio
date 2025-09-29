import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { Download, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, GraduationCap } from 'lucide-react';

// function App() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleScroll = () => {
//       const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
//       const scrollPosition = window.scrollY + 100;
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const skills = [
//     { name: 'React.js', level: 95 },
//     { name: 'JavaScript', level: 90 },
//     { name: 'Node.js', level: 85 },
//     { name: 'Express.js', level: 85 },
//     { name: 'MongoDB', level: 80 },
//     { name: 'SCSS', level: 85 }
//   ];

//   const experiences = [
//     {
//       title: 'Frontend & UI/UX Developer',
//       company: 'Sceptrum',
//       period: 'Jan 2025 - Present',
//       description: 'Designed and delivered responsive interfaces using HTML, CSS3 (SCSS) and JavaScript, improving load speed and UI consistency. Collaborated with designers to deliver pixel-perfect layouts and developed SCSS mixins for improved responsiveness.'
//     },
//     {
//       title: 'ODOO Developer',
//       company: 'Aarsol',
//       period: 'Jul 2023 - Oct 2023',
//       description: 'Contributed to customization and deployment of Odoo ERP and CMS modules. Configured Sales, Inventory, HR, and Accounting modules while performing functional testing and data migration.'
//     },
//     {
//       title: 'MERN Stack Intern',
//       company: 'Cloud-tek',
//       period: 'Jun 2022 - Sep 2022',
//       description: 'Implemented responsive layouts using CSS Flex and Positions. Strengthened understanding of React.js state management, hooks, and component reusability. Built scalable RESTful APIs with Node.js and Express.js.'
//     }
//   ];

//   const projects = [
//     {
//       title: 'Elite Glam',
//       description: 'Centralized platform connecting customers with salons & clinics for bookings and product management. Built with MERN stack and Firebase Auth.',
//       image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/buttdaniyal03',
//       category: 'Full Stack'
//     },
//     {
//       title: 'Islamia College Peshawar',
//       description: 'Data Migration and Functional Development project for educational institution management system.',
//       image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['JavaScript', 'PHP', 'MySQL'],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/buttdaniyal03',
//       category: 'Web Development'
//     },
//     {
//       title: 'QAU System',
//       description: 'Functional Development and Data Migration system for Quaid-i-Azam University administrative processes.',
//       image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['JavaScript', 'PHP', 'MySQL'],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/buttdaniyal03',
//       category: 'Enterprise'
//     },
//     {
//       title: 'Student Registration System',
//       description: 'Complete student management system with registration, enrollment, and administrative features.',
//       image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['HTML5', 'JavaScript', 'PHP', 'MySQL', 'CSS'],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/buttdaniyal03',
//       category: 'Web Application'
//     }
//   ];

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Portfolio
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize transition-all duration-300 hover:text-blue-400 ${
//                     activeSection === section ? 'text-blue-400' : 'text-gray-300'
//                   }`}
//                 >
//                   {section === 'hero' ? 'Home' : section}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
        
//         <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="mb-8">
//             <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold animate-bounce">
//               YD
//             </div>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
//             Yasin Daniyal
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
//             Frontend Developer | MERN Stack | Pixel-Perfect UI
//           </p>
//           <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
//             Fresh Software Engineering graduate (CGPA: 3.63) with hands-on experience in full-stack web development. 
//             Passionate about delivering responsive, user-centric applications through clean code and modern design.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href="/Yasin_Daniyal_Developer.pdf"
//               download
//               className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
//             >
//               <Download className="w-5 h-5 group-hover:animate-bounce" />
//               Download CV
//             </a>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:shadow-lg"
//             >
//               Get In Touch
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               About Me
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 I'm a passionate Frontend Developer specializing in the MERN stack with expertise in 
//                 creating pixel-perfect user interfaces. As a fresh Software Engineering graduate, 
//                 I bring modern development practices and a keen eye for detail to every project.
//               </p>
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 My experience spans from responsive web development to full-stack applications, 
//                 with a focus on clean code, scalable architectures, and exceptional user experiences. 
//                 I'm passionate about staying current with the latest web technologies.
//               </p>
//               <div className="flex gap-4">
//                 <div className="flex items-center gap-2 text-blue-400">
//                   <GraduationCap className="w-5 h-5" />
//                   <span>Software Engineering Graduate</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-purple-400">
//                   <Code className="w-5 h-5" />
//                   <span>MERN Stack Specialist</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="text-3xl font-bold text-blue-400 mb-2">3.63</div>
//                 <div className="text-gray-300">CGPA</div>
//               </div>
//               <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
//                 <div className="text-gray-300">Years Experience</div>
//               </div>
//               <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
//                 <div className="text-gray-300">Technologies</div>
//               </div>
//               <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
//                 <div className="text-gray-300">Major Projects</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Education
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
//             <div className="flex items-start gap-6">
//               <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl">
//                 <GraduationCap className="w-8 h-8 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold text-white mb-2">BS Software Engineering</h3>
//                 <p className="text-blue-400 font-semibold mb-2">Shaheed Zulfiqar Ali Bhutto Institute of Science & Technology</p>
//                 <p className="text-gray-400 mb-4">Oct 2021 - Jun 2025 | Islamabad, Pakistan</p>
//                 <div className="flex items-center gap-4">
//                   <div className="bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
//                     <span className="text-green-400 font-semibold">CGPA: 3.63</span>
//                   </div>
//                   <div className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
//                     <span className="text-purple-400 font-semibold">Final Year Project: Elite Glam (MERN Stack)</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 px-6 bg-gray-800/30">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Experience
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <div
//                 key={index}
//                 className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
//               >
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
//                       {exp.title}
//                     </h3>
//                     <p className="text-blue-400 font-semibold">{exp.company}</p>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
//                     <Briefcase className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed">{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Projects & Work
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 right-4 bg-blue-500/90 px-3 py-1 rounded-full text-sm font-semibold">
//                     {project.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-4 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-blue-300 border border-gray-600"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     <a
//                       href={project.liveUrl}
//                       className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
//                     >
//                       <Github className="w-4 h-4" />
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
//               <div className="text-2xl font-bold text-blue-400 mb-2">ReactJS Zero to Mastery</div>
//               <div className="text-gray-300 text-sm">Jun 2022</div>
//               <div className="text-gray-400 text-sm mt-2">Applied in Elite Glam project</div>
//             </div>
//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
//               <div className="text-2xl font-bold text-purple-400 mb-2">CSS & JavaScript</div>
//               <div className="text-gray-300 text-sm">Crash Course</div>
//               <div className="text-gray-400 text-sm mt-2">Foundation Skills</div>
//             </div>
//             <div className="text-center">
//               <a
//                 href="https://github.com/buttdaniyal03"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-6 py-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
//               >
//                 <Github className="w-5 h-5" />
//                 View All Projects
//                 <ExternalLink className="w-4 h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Skills & Technologies
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {skills.map((skill, index) => (
//               <div key={skill.name} className="group">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
//                     {skill.name}
//                   </span>
//                   <span className="text-gray-400">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
//                     style={{
//                       width: `${skill.level}%`,
//                       animationDelay: `${index * 200}ms`
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
//             {['HTML5', 'SCSS', 'Bootstrap', 'Git', 'C#', 'MongoDB', 'Figma', 'Firebase'].map((tech, index) => (
//               <div
//                 key={tech}
//                 className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center group"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 font-semibold">
//                   {tech}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-6 bg-gray-800/30">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Let's Work Together
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//             <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
//               I'm always interested in new opportunities and exciting projects. 
//               Let's discuss how we can bring your ideas to life.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <a
//               href="mailto:yasindaniyal.frontend@gmail.com"
//               className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
//             >
//               <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
//               <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">Email</h3>
//               <p className="text-gray-400">yasindaniyal.frontend@gmail.com</p>
//             </a>
            
//             <a
//               href="https://linkedin.com/in/yasin-daniyal"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
//             >
//               <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
//               <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</h3>
//               <p className="text-gray-400">Connect with me</p>
//             </a>
            
//             <a
//               href="https://github.com/buttdaniyal03"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
//             >
//               <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
//               <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">GitHub</h3>
//               <p className="text-gray-400">View my projects</p>
//             </a>
//           </div>
          
//           <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
//             <h3 className="text-2xl font-bold mb-6 text-white">Ready to Start a Project?</h3>
//             <p className="text-gray-300 mb-6">
//               I'm available for frontend development opportunities and MERN stack projects. 
//               Download my CV or reach out directly to discuss how I can help bring your ideas to life.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/Yasin_Daniyal_Developer.pdf"
//                 download
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
//               >
//                 <Download className="w-5 h-5" />
//                 Download Full CV
//               </a>
//               <a
//                 href="tel:+923324560477"
//                 className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:shadow-lg"
//               >
//                 <span>📞</span>
//                 +92 332 456 0477
//               </a>
//             </div>
//             <p className="text-gray-400 mt-4">
//               📍 Islamabad, Pakistan
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-6 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-gray-400">
//             © 2025 Yasin Daniyal - Frontend Developer. Built with React.js & Tailwind CSS.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;