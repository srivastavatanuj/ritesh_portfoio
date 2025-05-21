import React from 'react';
import { PROJECTS_DATA } from "../utils/constants/Constants";

const Project = () => {
  return (
    <section className="py-6 md:py-16 ">
      <div className="Section_Container">
        <p className='Section_Title'>Projects</p>
        <h2 className="Section_Heading">
          My Recent Works
        </h2>
        <p className="Section_Subheading">
          Explore some of our standout projects, showcasing our expertise and creativity.
        </p>

        <div className="Section_Grid">
          {PROJECTS_DATA.map(({ id, image, title, description, link }) => (
            <div
              key={id}
              className="relative group overflow-hidden card_shadow"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-4">
                <h3 className="Section_Heading">{title}</h3>
                <p className="Section_Subheading">{description}</p>
                <div className="flex space-x-4 absolute bottom-0 mb-2">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View project: ${title}`}
                    className="bg-[#A3A37A] text-white px-8 py-3 rounded-md font-semibold  shadow-md hover:bg-[#959565] transition"
                  >
                    View
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for: ${title}`}
                    className="border border-gray-400 text-gray-600 px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-200 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
