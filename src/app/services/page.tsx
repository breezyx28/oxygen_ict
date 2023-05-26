import ServiceCard1 from "@/components/cards/ServiceCard1";
import { Svg } from "@/components/icons";
import Jumbotrun from "@/components/pages/Jumbotrun";
import React from "react";

const Services = () => {
  return (
    <>
      <Jumbotrun pageName={"Our Services"} />
      <section className="section-container z-10 bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="section-text">
            Our <span className="text-primary">Services</span>
          </div>

          <p className="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2">
            <div className="space-y-3">
              <ServiceCard1
                title="Education"
                description={"Lorem ipsum dolor sit amet."}
              >
                {Svg.education}
              </ServiceCard1>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Advertisement"
                description={"Lorem ipsum dolor sit amet."}
              >
                {Svg.adv}
              </ServiceCard1>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Telecommunications"
                description={"Lorem ipsum dolor sit amet."}
              >
                {Svg.tower}
              </ServiceCard1>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Digital Services"
                description={"Lorem ipsum dolor sit amet."}
              >
                {Svg.tech}
              </ServiceCard1>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
