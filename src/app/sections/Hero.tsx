"use client";
import React from "react";
import Logo from "@/components/logo/Logo";
import { Svg } from "@/components/icons";
import VideoModal from "@/components/modals/VideoModal";
import heroAnimation from "@/helper/animations/heroAnimation";
import Object from "@/components/3D/Object";

const Hero = () => {
  React.useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="grid grid-flow-cols place-items-center md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-4 h-full">
        <div className="w-full h-full">
          <div className="md:pl-20 pl-8 h-full flex flex-col gap-y-8 justify-center text-white">
            <div className="flex flex-col gap-y-2">
              <span className="hero-gsap relative top-[100px] hero-detail-text opacity-0 text-sm font-semibold text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </span>
              <div className="relative hero-gsap top-[100px] opacity-0 hero-oxygen-phrase md:text-7xl text-slate-800 text-4xl font-bold capitalize">
                we <span className="text-gradient">innovate</span> for people
              </div>
            </div>
            <div className="relative hero-gsap top-[100px] hero-description opacity-0 text-sm text-slate-500 w-[80%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              quis molestiae distinctio ratione perferendis aliquam voluptatem.
              Aperiam qui mollitia esse quo consequuntur fuga error accusantium
              sunt, dolorem corrupti vitae numquam.
            </div>
            <div className="hero-buttons relative left-[-100px] opacity-0 flex items-center gap-x-8">
              <button className="primary-btn shade-x z-10">Explore</button>
              <VideoModal modalID={"heroSectionVideo"}>
                <div className="relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <label
                    htmlFor="heroSectionVideo"
                    className="relative bg-primary shade-x rounded-full inline-flex p-1 z-10 cursor-pointer"
                  >
                    {Svg.playBtn}
                  </label>
                </div>
              </VideoModal>
            </div>
          </div>
        </div>
        {/* <div className="absolute w-full h-full">
          <div className="bg-pattern-pie"></div>
        </div> */}
        <div className="relative h-[70%] w-[70%] md:flex justify-center hidden">
          <Object />
          {/* <div className="absolute gsap-from oxygen-hero-circle w-full h-full bg-primary z-10 pattern-pie backdrop-blur-lg rounded-full shadow-inner"></div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="p-[30px] bg-primary gsap-from oxygen-hero-circle rounded-full z-20">
              <Logo />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
