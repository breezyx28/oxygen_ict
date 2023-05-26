import Image from "next/image";
import React from "react";

interface IEventImagesProps {
  path: string;
  width: number;
  height: number;
  alt: string;
}

const EventImage = ({ path, width, height, alt }: IEventImagesProps) => {
  return (
    <div>
      <Image
        className="max-w-[700px] w-full max-h-[200px] h-full rounded-[15px] shadow-md"
        src={path}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default EventImage;
