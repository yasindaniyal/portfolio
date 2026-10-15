import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github } from "lucide-react";

type Props = {
  scrollToSection: (id: string) => void;
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55 } },
};

const capabilities = [
  ["01", "Product interfaces", "Responsive, accessible and conversion-aware UI"],
  ["02", "Application systems", "Auth, roles, real-time data and cloud workflows"],
  ["03", "Business integrations", "Payments, webhooks, maps and third-party APIs"],
];

const Hero = ({ scrollToSection }: Props) => (
  <section
    id="hero"
    className="technical-grid relative flex min-h-screen items-center overflow-hidden bg-[#172238]/90 px-6 pb-16 pt-28"
  >
    <div className="pointer-events-none absolute left-0 top-24 h-px w-24 bg-cyan-400 md:w-40" />
    <div className="pointer-events-none absolute bottom-12 right-0 h-px w-24 bg-amber-300 md:w-40" />

    <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-7 inline-flex items-center gap-3 border-l-2 border-cyan-400 pl-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"
        >
          Full-Stack / Frontend Engineer
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl"
        >
          I build digital products that work beyond the demo.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          React and TypeScript experiences backed by secure Firebase systems,
          real-time workflows and practical product thinking.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href={`${import.meta.env.BASE_URL}Yasin_Daniyal_Frontend.pdf`}
            download="Yasin_Daniyal_CV.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            <Download className="h-5 w-5" /> Download CV
          </a>
          <a
            href="https://github.com/yasindaniyal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 px-6 py-3.5 font-bold text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 font-semibold text-slate-300 transition-colors hover:text-white"
          >
            Explore selected work <ArrowDownRight className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -right-3 -top-3 h-full w-full border border-cyan-400/35" />
        <div className="relative border border-slate-600 bg-[#111c2e] p-6 sm:p-8">
          <div className="flex items-center gap-4 border-b border-slate-700 pb-6">
            <div className="h-20 w-20 shrink-0 overflow-hidden border border-slate-600 bg-slate-800">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Yasin Daniyal"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-bold text-white">Yasin Daniyal</p>
              <p className="mt-1 text-sm text-slate-400">Islamabad, Pakistan</p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for opportunities
              </p>
            </div>
          </div>

          <p className="mb-5 mt-6 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">
            Engineering snapshot
          </p>
          <div className="divide-y divide-slate-700">
            {capabilities.map(([number, title, detail]) => (
              <div key={number} className="grid grid-cols-[2rem_1fr] gap-3 py-4 first:pt-0">
                <span className="font-mono text-xs text-cyan-300">{number}</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-700 pt-5 font-mono text-xs text-slate-300">
            {['React 19', 'TypeScript', 'Firebase', 'Node.js'].map((item) => (
              <span key={item} className="border border-slate-600 px-2.5 py-1.5">{item}</span>
            ))}
          </div>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default Hero;
