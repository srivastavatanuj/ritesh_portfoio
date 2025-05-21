import React from "react";
import { aboutSection } from "../utils/constants/Constants";

const AboutSection = () => {
  return (
    <section className="bg-white flex flex-wrap md:flex-nowrap items-center gap-2 py-2 md:py-16">
      <div className="w-full lg:w-1/2 hidden md:flex md:justify-center lg:justify-end">
        <img src={aboutSection.image} alt="About Me" className="md:w-[85%] lg:w-2/3" />
      </div>
      <div className="w-full md:w-1/2 px-4 lg:px-10 py-6 md:py-0 ">
        <h4 className="Section_Title">{aboutSection.intro}</h4>
        <h2 className="Section_Heading">{aboutSection.heading}</h2>
        <p className="Section_Subheading">{aboutSection.description}</p>
        <div className="flex gap-x-8 text-sm font-medium text-[#B1B493] mt-3 overflow-hidden">
          <ul className="space-y-4 text-black/70 ">
            {aboutSection.personalInfo.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
          <ul className="space-y-4">
            {aboutSection.personalInfo.map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-4 mt-6 text-[#95977e]">
          {aboutSection.hobbies.map((hobby, index) => (
            <div key={index} className="flex items-center space-x-2 border-r pr-4 last:border-r-0">
              <span>{hobby.icon}</span>
              <span>{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
