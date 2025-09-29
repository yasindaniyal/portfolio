type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
  </div>
);

export default SectionHeader;
