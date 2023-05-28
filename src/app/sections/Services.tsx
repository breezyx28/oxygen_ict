"use client";
import AvatarsStackCard from "@/components/cards/AvatarsStackCard";
import ServiceCard from "@/components/cards/ServiceCard";
import TextCard from "@/components/cards/TextCard";
import { Svg } from "@/components/icons";
import servicesAnimation from "@/helper/animations/servicesAnimation";
import Link from "next/link";
import React from "react";

const Services = () => {
  React.useEffect(() => {
    // requestAnimationFrame(servicesAnimation);
    servicesAnimation();
  }, []);

  return (
    <section
      id="services"
      className="w-full md:h-screen h-auto min-h-screen md:p-20 p-6"
    >
      <div className="services-wrapper flex flex-col gap-y-10 justify-between w-full h-full">
        <div className="grid grid-flow-cols grid-cols-2">
          <div className="gsap-services-from service-title section-text">
            Our <span className="text-primary">Services</span>
          </div>
          <div className="gsap-services-from services-description flex flex-col gap-y-4">
            <span className="text-sm text-slate-400 max-w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae, nam.
            </span>
            <button type="button" className="primary-btn w-[110px] h-[40px]">
              Explore
            </button>
          </div>
        </div>
        <div className="grid md:grid-flow-cols grid-flow-rows md:grid-cols-2 grid-rows-2 gap-10">
          <div className="services order-2 md:order-1 grid grid-flow-cols grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceCard
              title="Education"
              description={"Lorem ipsum dolor sit amet."}
            >
              {Svg.education}
            </ServiceCard>
            <ServiceCard
              title="Advertisement"
              description={"Lorem ipsum dolor sit amet."}
            >
              {Svg.adv}
            </ServiceCard>
            <ServiceCard
              title="Telecommunications"
              description={"Lorem ipsum dolor sit amet."}
            >
              {Svg.tower}
            </ServiceCard>
            <ServiceCard
              title="Digital Services"
              description={"Lorem ipsum dolor sit amet."}
            >
              {Svg.tech}
            </ServiceCard>

            <Link
              className="link justify-center text-slate-800 font-semibold flex items-center gap-x-1 hover:gap-x-3 duration-200 ease-in"
              href={"/services"}
            >
              More Services <span>{Svg.rightArrow}</span>
            </Link>
          </div>
          <div className="relative opacity-0 -right-[100px] service-poster order-1 md:order-2">
            <div className="absolute lg:flex hidden top-[40px] md:-right-[35px] right-[35px]">
              <TextCard />
            </div>
            <div className="absolute lg:flex hidden md:-bottom-[30px] md:-left-[100px] bottom-[30px] left-[100px]">
              <AvatarsStackCard />
            </div>
            <img
              className="w-full h-full rounded-[15px] object-cover"
              src={"/images/services.jpg"}
              alt={"Our Services"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
