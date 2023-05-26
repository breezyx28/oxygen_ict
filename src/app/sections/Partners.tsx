"use client";
import React from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  React.useEffect(() => {
    gsap.to(".partner-title", {
      scrollTrigger: {
        trigger: ".partners",
      },
      bottom: 0,
      opacity: 1,
      duration: 1.4,
    });

    gsap.to(".gsap-partner-companies", {
      scrollTrigger: {
        trigger: ".partners",
      },
      opacity: 1,
      bottom: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="partners"
      className="partners bg-slate-100 w-full min-h-[90px] py-[3rem]"
    >
      <div className="partners-wrapper w-full flex flex-col gap-y-6 items-center">
        <div className="gsap-from-bottom partner-title text-2xl text-slate-600 font-semibold capitalize">
          our partners
        </div>
        <div className="w-full md:max-h-[300px] h-auto flex flex-wrap md:gap-x-[100px] gap-[50px] md:p-0 p-6 items-center md:justify-center">
          {partners?.map((item: any) => (
            <div
              key={item.id}
              className="gsap-partner-companies gsap-from-bottom"
            >
              <Image
                className="grayscale duration-100 ease-in hover:grayscale-0 opacity-60 hover:opacity-100"
                src={item.src}
                alt={item.alt}
                width={item.width / 1.5}
                height={item.height / 1.5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

let partners = [
  {
    id: 1,
    alt: "Sudani",
    width: "80",
    height: "80",
    src: "/icons/companies/sudani_text.png",
  },
  {
    id: 2,
    alt: "Zain",
    width: "180",
    height: "77",
    src: "/icons/companies/zain_text.png",
  },
  {
    id: 3,
    alt: "MTN",
    width: "137",
    height: "137",
    src: "/icons/companies/mtn.png",
  },
  {
    id: 4,
    alt: "IEEE",
    width: "137",
    height: "137",
    src: "/icons/companies/ieee.png",
  },
  {
    id: 5,
    alt: "OZ",
    width: "150",
    height: "150",
    src: "/icons/companies/oz.png",
  },
  {
    id: 6,
    alt: "Solar",
    width: "175",
    height: "175",
    src: "/icons/companies/solar.png",
  },
];

export default Partners;
