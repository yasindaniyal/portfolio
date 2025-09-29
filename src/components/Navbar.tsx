type Props = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const Navbar = ({ activeSection, scrollToSection }: Props) => {
  const sections = ["hero", "about", "experience", "projects", "skills", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                  activeSection === section ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
