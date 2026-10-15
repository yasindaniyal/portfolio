import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import SectionHeader from "../SectionHeader";
import ExperienceCard from "./ExperienceCard";

const Experience = () => (
  <section id="experience" className="relative z-10 border-y border-slate-500/25 bg-[#1d2c46]/90 px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <SectionHeader title="Experience" />
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
