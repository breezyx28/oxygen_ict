import Image from "next/image";
export default function Loading() {
  return (
    <div
      className="w-screen h-screen bg-white fixed flex flex-col justify-center items-center"
      style={{ zIndex: "9999", overflow: "hidden" }}
    >
      <Image
        className="loading-fade"
        width={"140"}
        height={"140"}
        src={"/icons/apple-touch-icon-180x180.png"}
        alt="Oxygen loading icon"
      />
    </div>
  );
}
