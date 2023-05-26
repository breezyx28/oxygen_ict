// import { Inter } from "next/font/google";
import Partners from "./sections/Partners";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import About from "./sections/About";
import History from "./sections/History";
// import Subscribe from "./sections/Subscribe";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main className="mx-auto w-auto h-auto">
        <Hero />
        <Partners />
        <Services />
        <About />
        <History />
        {/* <Subscribe /> */}
      </main>
    </div>
  );
}
