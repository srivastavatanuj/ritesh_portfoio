import { motion } from "framer-motion";
import { skills, skillsSection } from "../utils/constants/Constants";
import VideoSection from "../assets/Vedeos/Rooney01 0314.mp4";

const Skills = () => {
  return (
    <section className="Section_Bg py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-black/10"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Text Headers with improved spacing and style */}
        <div className="text-center mb-12">
          <p className="Section_Title inline-block px-4 py-1 rounded-full bg-black/5 text-sm uppercase tracking-wider mb-3">{skillsSection.title}</p>
          <h2 className="Section_Heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{skillsSection.heading}</h2>
          <p className="Section_Subheading text-lg text-black/70 max-w-2xl mx-auto">{skillsSection.subheading}</p>
        </div>

        {/* Fixed Video Section */}
        <div className="flex justify-center mb-16">
          <div className="w-full md:w-3/4 lg:w-2/3 aspect-video shadow-xl rounded-2xl overflow-hidden border border-gray-300">
            <video
              controls
              className="w-full h-full object-contain bg-black"
              preload="metadata"
            >
              <source src={VideoSection} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Skills Grid with improved layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-center text-black mb-4">
                {skill.name}
              </h3>
              <div className="flex justify-center mb-6">
                <div className="w-28 h-28 flex items-center justify-center relative">
                  {/* Background circle */}
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle
                      className="text-gray-100"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50%"
                      cy="50%"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      className="text-[#95977e]"
                      strokeWidth="6"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50%"
                      cy="50%"
                      initial={{ strokeDashoffset: 251 }}
                      animate={{
                        strokeDashoffset: 251 - (251 * skill.percentage) / 100
                      }}
                      strokeDasharray="251"
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-xl font-bold text-black/80">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-2 border-t pt-4 border-gray-100">
                <div className="text-center">
                  <span className="text-[#95977e] font-semibold block text-base">28%</span>
                  <p className="text-black/60 mt-1">Last week</p>
                </div>
                <div className="text-center">
                  <span className="text-[#95977e] font-semibold block text-base">60%</span>
                  <p className="text-black/60 mt-1">Last month</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="h-1 w-16 bg-[#95977e] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;