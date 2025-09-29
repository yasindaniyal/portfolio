import { motion } from "framer-motion";
import { Download } from "lucide-react";

type Props = {
  scrollToSection: (id: string) => void;
};

const Hero = ({ scrollToSection }: Props) => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="text-center z-10 transition-all duration-1000">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold animate-bounce">
          YD
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Yasin Daniyal
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto px-4">
          Frontend Developer | MERN Stack | Pixel-Perfect UI
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto px-4">
          Fresh Software Engineering graduate (CGPA: 3.63) with hands-on
          experience in full-stack web development. Passionate about delivering
          responsive, user-centric applications through clean code and modern
          design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/yasindaniyal/Yasin_Daniyal_Frontend.pdf"
            download="Yasin_Daniyal_CV.pdf"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
