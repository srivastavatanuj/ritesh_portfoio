import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { HeroSectionData } from "../utils/constants/Constants";

function HeroSection() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      // className="w-full h-screen"
      >
        {HeroSectionData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[50vh] lg:h-screen flex items-center">
              <div className="w-full lg:w-2/3 px-6 max-w-6xl relative z-10">
                <span className="text-[#B1B493] uppercase tracking-wider text-sm md:text-base font-medium">
                  {slide.text}
                </span>
                <h1 className="text-3xl uppercase md:text-5xl font-bold mt-3 leading-tight text-black">
                  {slide.heading}{" "}
                  <span className="text-[#B1B493] tracking-wide">{slide.highlight}</span>{" "}
                  {slide.description}
                </h1>
                <div className="mt-6 flex space-x-4">
                  <a href="/Contect">
                    <button className="bg-[#A3A37A] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-[#959565] transition">
                      Hire me
                    </button>
                  </a>
                  <a href="https://drive.google.com/file/d/1TTHMOAWPn6ZNXJC9LPdgDWXtkXuAd7cr/view?usp=drive_link">
                    <button className="border border-gray-400 text-gray-600 px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-200 transition">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>

              {/* Desktop Image (Hidden in Mobile) */}
              <div
                className="hidden lg:block w-1/2 h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;
