import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Services from "./components/Services";
import Info from "./components/Info";
import Testimony from "./components/Testimonial";
import Footer from "./components/Footer"
import Drawer from "./components/Drawer"
import IconGrid from "./components/IconGrid"
import Faq from "./components/Faq";



export default function Home() {
  return (
    <>
      <Drawer/>
      <Navbar />
      {/* <IconGrid/> */}
      <Hero />
      {/* <Services /> */}
      {/* <Info /> */}
      <Testimony />
      <Faq/>
      <Footer/>
    </>
  );
}
