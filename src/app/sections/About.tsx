"use client";
import React from "react";
import aboutAnimation from "@/helper/animations/aboutAnimation";
// import CanvasPlayground from "@/components/3D/CanvasPlayground";
// import Object from "@/components/3D/Object";

const About = () => {
  React.useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden z-20 flex flex-col h-full justify-center bg-primary"
    >
      <div className="absolute pattern-wave z-10"></div>
      <div className="about-wrapper container px-6">
        <div className="grid grid-flow-cols md:grid-cols-2 grid-cols-1 w-full h-full">
          <div className="h-full flex flex-col gap-y-10">
            <div className="relative about-animation fade-left section-text">
              <span className="text-white">About Us</span>
            </div>
            <div className="relative about-animation fade-left md:text-4xl text-2xl font-semibold text-white md:w-[60%] w-[90%]">
              The best reliable partner that meets your demands Information
            </div>
            <div className="about-description fade-left about-animation text-white text-md md:w-[70%] w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, architecto commodi! Odio eaque, a enim at officiis
              placeat dolore ea corrupti corporis temporibus accusamus, quia,
              eveniet suscipit provident cumque blanditiis.
            </div>
            <button
              type="button"
              className="btn relative about-animation fade-left bg-slate-800 px-4 py-3 w-[200px] z-10 rounded-[20px] shade-x"
            >
              Explore More
            </button>
          </div>
          <div className="relative about-animation fade-left md:flex flex-col items-center hidden">
            <div className="w-full h-full z-10">
              <img src="/icons/oxygen_3d.png" />
              {/* <Object /> */}
              {/* <CanvasPlayground /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
