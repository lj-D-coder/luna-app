import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={workSans.className}>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
