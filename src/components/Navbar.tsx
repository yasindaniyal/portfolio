import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type Props = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const sections = ["hero", "about", "education", "experience", "projects", "skills", "contact"];

const Navbar = ({ activeSection, scrollToSection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full bg-[#111c2e]/95 backdrop-blur-md border-b border-slate-600/60 z-50 pointer-events-auto"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors"
            onClick={() => navigate("hero")}
            aria-label="Go to home section"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-cyan-400 bg-cyan-400 font-mono text-sm font-black text-slate-950">YD</span>
            <span className="hidden text-xs font-semibold tracking-[0.22em] text-slate-300 sm:block">PORTFOLIO</span>
          </button>
          <div className="hidden md:flex space-x-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => navigate(section)}
                className={`relative px-4 py-2 capitalize transition-colors duration-300 text-sm font-medium ${
                  activeSection === section ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{section === "hero" ? "Home" : section}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden rounded-lg border border-gray-700 bg-white/5 p-2 text-gray-200"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden grid gap-2 pt-4 pb-2"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => navigate(section)}
                className={`capitalize text-left rounded-xl px-4 py-3 ${
                  activeSection === section
                    ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
