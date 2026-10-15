type Props = {
  title: string;
};

const sectionNumbers: Record<string, string> = {
  "About Me": "01",
  Education: "02",
  Experience: "03",
  "Selected Projects": "04",
  Skills: "05",
  "Let's Build Something Valuable": "06",
};

const SectionHeader = ({ title }: Props) => (
  <div className="mb-14 flex items-end gap-5 border-b border-slate-600/40 pb-5">
    <span className="font-mono text-sm font-bold tracking-[0.2em] text-cyan-300">
      /{sectionNumbers[title] ?? "00"}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
      {title}
    </h2>
    <div className="mb-2 hidden h-px flex-1 bg-slate-600/30 sm:block" />
  </div>
);

export default SectionHeader;
