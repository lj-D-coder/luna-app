import Navbar from "../components/Navbar";
// import Services from "./components/Services";
import Info from "../components/Info";
import Testimony from "../components/Testimonial";
import Footer from "../components/Footer";
import IconGrid from "../components/IconGrid";
import Banner from "../components/Banner";
import AppLink from "../components/AppLink";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <>
      {/* <Drawer /> */}
      <Navbar />
      <IconGrid />
      <Info />
      <Banner />
      <Testimony />
      <AppLink />
      <HowItWorks />
      <Footer />
    </>
  );
}