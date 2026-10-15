import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeader from "../SectionHeader";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Contact = () => (
  <section id="contact" className="py-20 px-6 relative z-10 bg-[#172238]/90">
    <div className="max-w-6xl mx-auto py-5">
      <SectionHeader title="Let's Build Something Valuable" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-5 mb-14 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <ContactCard
            Icon={MapPin}
            title="Location"
            value="Islamabad, Pakistan"
            link="https://www.google.com/maps/search/?api=1&query=Islamabad%2C%20Pakistan"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContactCard
            Icon={Mail}
            title="Email"
            value="yasindaniyal.frontend@gmail.com"
            link="mailto:yasindaniyal.frontend@gmail.com"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContactCard
            Icon={Github}
            title="GitHub"
            value="github.com/yasindaniyal"
            link="https://github.com/yasindaniyal"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContactCard
            Icon={Linkedin}
            title="LinkedIn"
            value="linkedin.com/in/yasindaniyal"
            link="https://www.linkedin.com/in/yasindaniyal"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Open to frontend, full-stack and product engineering opportunities
          where thoughtful UI and reliable architecture both matter.
        </p>
        <a
          href="mailto:yasindaniyal.frontend@gmail.com?subject=Project%20or%20career%20opportunity"
          className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 px-8 py-3.5 rounded-md font-bold text-slate-950 transition-colors duration-200"
        >
          Start a Conversation
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
