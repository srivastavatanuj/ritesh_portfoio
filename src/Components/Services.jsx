import React from "react";
import { servicesData } from "../utils/constants/Constants";

const Services = () => {
  return (
    <section className="Section_Bg">
      <div className="Section_Container">
        <p className="Section_Title">{servicesData.Title}</p>
        <h2 className="Section_Heading">{servicesData.heading}</h2>
        <p className="Section_Subheading">{servicesData.description}</p>

        <div className="Section_Grid">
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 card_shadow text-center"
            >
              <div>
                <img
                  src={
                    service.icon || "service.placeholder"
                  }
                  alt={service.title}
                  className="w-12 h-12 mx-auto mb-4 bg-[#95977e] p-1 card_shadow"
                />
              </div>
              <h3 className="text-lg font-semibold text-black/70 uppercase tracking-wider">{service.title}</h3>
              <p className="Section_Subheading">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
