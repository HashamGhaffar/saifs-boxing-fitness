"use client";
import HeroHome from "./_sections/HeroHome";
import AboutUs from "./_sections/AboutUs";
import Partners from "./_sections/Partner";
import Facilities from "./_sections/Facilities";
import Coatches from "./_sections/Coatches";
import Location from "./_sections/Location";
import Sponsors from "./_sections/Sponsors";
// import InstagramFollow from "./_sections/InstagramFollow";
import Footer from "../_components/Footer";
import Schedule from "./_sections/Schedule";

export default function Home() {
  return (
    <>
      <HeroHome />
      <AboutUs />
      <Partners />
      <Facilities />
      <Coatches />
      <Schedule />
      <Location />
      <Sponsors />
      {/* <InstagramFollow /> */}
      <Footer />
    </>
  );
}
