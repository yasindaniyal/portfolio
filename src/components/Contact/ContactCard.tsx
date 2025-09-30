import { LucideIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  Icon: LucideIcon;
  title: string;
  value: string;
  link?: string;
};

const ContactCard: React.FC<Props> = ({ Icon, title, value, link }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsCentered(entry.isIntersecting));
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // middle band of viewport
        threshold: 0,
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <a
      ref={ref}
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10 flex items-center gap-4 flex-nowrap"
    >
      <Icon className="w-6 h-6 text-green-400 shrink-0" />
      <div className="min-w-0 max-w-[240px]">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        {/* Value text */}
        <p className="text-gray-300 break-all select-text">
          {/* Desktop hover effect */}
          <span className="hidden md:inline-block text-gray-300 group-hover:text-green-400 group-hover:underline transition-all duration-300">
            {value}
          </span>

          {/* Mobile center-glow effect */}
          <span
            className={`md:hidden inline-block transition-all duration-500 ${
              isCentered
                ? "text-green-400 underline scale-105 animate-pulse drop-shadow-md"
                : "text-gray-300"
            }`}
          >
            {value}
          </span>
        </p>
      </div>
    </a>
  );
};

export default ContactCard;
