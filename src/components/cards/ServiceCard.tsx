"use client";
import servicesAnimation from "@/helper/animations/servicesAnimation";
import React, { ReactNode } from "react";

interface ServiceCard {
  children: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = (props: ServiceCard) => {
  React.useEffect(() => {
    servicesAnimation();
  }, []);

  return (
    <div className="relative gsap-services-from service-item flex items-center md:gap-x-8 gap-x-4 p-4 max-h-[100px] rounded-[30px] bg-white shadow-sm">
      <div className="service-icon p-3 rounded-[20px] bg-blue-50">
        {props.children}
      </div>
      <div className="service-description flex flex-col justify-around">
        <span className="text-slate-700 text-lg font-semibold">
          {props.title}
        </span>
        <span className="text-slate-400 text-sm">{props.description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
