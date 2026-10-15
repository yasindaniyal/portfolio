import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const Education = () => (
  <section id="education" className="py-20 px-6 relative z-10 bg-[#172238]/90">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Education" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-slate-900/70 p-8 rounded-lg border border-slate-800 hover:border-cyan-500/40 transition-colors duration-200"
      >
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="bg-cyan-400/10 p-4 rounded-lg border border-cyan-400/20">
            <GraduationCap className="w-8 h-8 text-cyan-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-black text-white mb-2">
              BS Software Engineering
            </h3>
            <p className="text-cyan-400 font-bold mb-2">
              Shaheed Zulfiqar Ali Bhutto Institute of Science & Technology
            </p>
            <p className="text-gray-400 mb-6 font-medium">
              Oct 2021 - Jun 2025 | Islamabad, Pakistan
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-500/10 px-5 py-2.5 rounded-full border border-green-500/30 text-center">
                <span className="text-green-400 font-bold text-sm sm:text-base tracking-wide">
                  CGPA: 3.63
                </span>
              </div>
              <div className="bg-cyan-500/10 px-5 py-2.5 rounded-full border border-cyan-500/30 text-center">
                <span className="text-cyan-400 font-bold text-sm sm:text-base tracking-wide">
                  Final Year Project: Elite Glam (MERN Stack)
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
