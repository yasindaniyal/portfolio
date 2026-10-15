import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    label: "Production SaaS",
    title: "From onboarding to operations",
    copy: "Multi-role dashboards, branch-level data, account recovery and admin workflows designed as one coherent product.",
    tags: ["React 19", "TypeScript", "Firebase"],
  },
  {
    label: "Secure commerce",
    title: "Payments users can trust",
    copy: "Server-authoritative checkout, signed webhook confirmation, idempotent processing and clear payment recovery states.",
    tags: ["Cloud Functions", "SafePay", "Webhooks"],
  },
  {
    label: "Real-time systems",
    title: "Interfaces that stay current",
    copy: "Live Firestore listeners, role-aware navigation and operational states that remain consistent across business and admin views.",
    tags: ["Firestore", "Security Rules", "RBAC"],
  },
  {
    label: "Product delivery",
    title: "Complexity translated into clarity",
    copy: "Responsive experiences, resilient forms and practical error states built around real user journeys—not isolated screens.",
    tags: ["UX Engineering", "Zod", "Responsive UI"],
  },
];

const CapabilitySlider = () => {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const paused = userPaused || interactionPaused;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  const slide = slides[active];

  return (
    <section
      aria-label="Engineering capabilities"
      className="relative z-10 border-y border-slate-500/25 bg-[#111c2e]/95 px-6 py-10"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false);
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-[12rem_1fr_auto] md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">What I deliver</p>
          <p className="mt-2 font-mono text-sm text-slate-500">0{active + 1} / 0{slides.length}</p>
        </div>

        <div aria-live="polite" aria-atomic="true" className="min-h-[10rem] overflow-hidden border-l-2 border-amber-300 pl-5 sm:min-h-[8rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-300">{slide.label}</p>
              <h2 className="mt-2 text-2xl font-bold text-white">{slide.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">{slide.copy}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span key={tag} className="border border-slate-600 px-2.5 py-1 font-mono text-xs text-slate-300">{tag}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          <button type="button" onClick={() => setUserPaused((value) => !value)} aria-label={userPaused ? "Play capability slider" : "Pause capability slider"} className="flex h-11 w-11 items-center justify-center border border-slate-600 text-white transition-colors hover:border-amber-300 hover:text-amber-300">
            {userPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => move(-1)} aria-label="Previous capability" className="flex h-11 w-11 items-center justify-center border border-slate-600 text-white transition-colors hover:border-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next capability" className="flex h-11 w-11 items-center justify-center bg-cyan-400 text-slate-950 transition-colors hover:bg-cyan-300">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-[width] duration-500" style={{ width: `${((active + 1) / slides.length) * 100}%` }} />
    </section>
  );
};

export default CapabilitySlider;
