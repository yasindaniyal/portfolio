import { Code, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side text */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Frontend Developer specializing in the MERN stack with
            expertise in creating pixel-perfect user interfaces. As a fresh Software
            Engineering graduate, I bring modern development practices and a keen eye
            for detail to every project.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My experience spans from responsive web development to full-stack
            applications, with a focus on clean code, scalable architectures, and
            exceptional user experiences. I'm passionate about staying current with
            the latest web technologies.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-blue-400">
              <GraduationCap className="w-5 h-5" />
              <span>Software Engineering Graduate</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Code className="w-5 h-5" />
              <span><strong>Frontend & MERN Stack Specialist</strong></span>
            </div>
          </div>
        </div>

        {/* Right side stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "CGPA", value: "3.63", color: "blue" },
            { label: "Years Experience", value: "1.5+", color: "purple" },
            { label: "Technologies", value: "10+", color: "green" },
            { label: "Major Projects", value: "10+", color: "pink" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-${stat.color}-500/50 transition-all duration-300 hover:scale-105`}
            >
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
