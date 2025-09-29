import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Education = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Education" />

      <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
        <div className="flex items-start gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              BS Software Engineering
            </h3>
            <p className="text-blue-400 font-semibold mb-2">
              Shaheed Zulfiqar Ali Bhutto Institute of Science & Technology
            </p>
            <p className="text-gray-400 mb-4">
              Oct 2021 - Jun 2025 | Islamabad, Pakistan
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                <span className="text-green-400 font-semibold">CGPA: 3.63</span>
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-semibold">
                  Final Year Project: Elite Glam (MERN Stack)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
