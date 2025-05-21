import React from "react";
import { Link } from "react-router-dom";
import { contactContent } from "../utils/constants/Constants";

function ContactSection() {

  return (
    <section className="relative md:py-0 text-white py-6 " style={{ backgroundColor: contactContent.sectionBg }}>
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 lg:w-2/3 flex items-center">
            <div className="w-full">
              <h2 className="Section_Heading">{contactContent.title}</h2>
              <p className="text-white text-sm mt-1 md:mt-3 ">{contactContent.description}</p>
              <Link to='/Contect'>
              
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="mt-4 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                {contactContent.buttonText}
              </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex md:w-1/2 lg:w-1/3 justify-end items-end relative">
            <img src={contactContent.image.src} alt={contactContent.image.alt} className="h-[320px] object-cover" />
          </div>
        </div>
      </div>    
    </section>
  );
}

export default ContactSection;
