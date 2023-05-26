import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/icons/Oxygen.svg"}
      className="invert"
      width={42}
      height={42}
      alt="Oxygen Logo"
      priority
    />
  );
};

export default Logo;
