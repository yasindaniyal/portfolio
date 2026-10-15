import { motion } from "framer-motion";
import { Code, GraduationCap, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const stats = [
  {
    label: "CGPA",
    value: "3.63",
  },
  {
    label: "Years Experience",
    value: "2+",
  },
  {
    label: "Technologies",
    value: "15+",
  },
  {
    label: "Client Projects",
    value: "13",
  },
];

const About = () => (
  <section id="about" className="py-20 px-6 relative z-10 bg-[#1d2c46]/90 border-y border-slate-500/25">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="About Me" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left side text */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a Full-Stack / Frontend Engineer with 2+ years of professional
            experience delivering production-grade platforms for clients across
            the US, Europe, and Pakistan. From multi-role SaaS dashboards and
            real-time Firebase systems to API-driven marketplaces, I specialize
            in building scalable web solutions that solve real business
            problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My stack spans React, TypeScript, CodeIgniter/PHP, Node.js and
            Firebase—including Authentication, Firestore, Cloud Functions and
            Security Rules. I bring a strong eye for pixel-perfect UI, clean
            architecture, payment workflows and secure multi-role experiences.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-3 text-cyan-400 bg-cyan-400/10 px-5 py-3 rounded-full border border-cyan-400/20 shadow-inner">
              <GraduationCap className="w-6 h-6" />
              <span className="font-semibold text-sm">
                BS Software Engineering
              </span>
            </div>
            <div className="flex items-center gap-3 text-fuchsia-400 bg-fuchsia-400/10 px-5 py-3 rounded-full border border-fuchsia-400/20 shadow-inner">
              <Layers className="w-6 h-6" />
              <span className="font-semibold text-sm">
                Full-Stack / Frontend Engineer
              </span>
            </div>
            <div className="flex items-center gap-3 text-blue-400 bg-blue-400/10 px-5 py-3 rounded-full border border-blue-400/20 shadow-inner">
              <Code className="w-6 h-6" />
              <span className="font-semibold text-sm">React · TypeScript · Firebase</span>
            </div>
          </div>
        </motion.div>

        {/* Right side stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/40 transition-colors duration-200 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl font-bold text-cyan-300 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
