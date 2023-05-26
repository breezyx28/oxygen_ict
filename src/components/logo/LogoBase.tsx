import Image from "next/image";
import React from "react";

const LogoBase = () => {
  return (
    <Image
      src={"/icons/favicon.ico"}
      width={42}
      height={42}
      alt="Oxygen Logo"
      priority
    />
  );
};

export default LogoBase;
