"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import HeroHome from "./_sections/HeroHome";
import AboutUs from "./_sections/AboutUs";
import Partners from "./_sections/Partner";
import Facilities from "./_sections/Facilities";
import Fighters from "./_sections/Fighters";
import Coatches from "./_sections/Coaches";
import Location from "./_sections/Location";
import Sponsors from "./_sections/Sponsors";
// import InstagramFollow from "./_sections/InstagramFollow";
import Footer from "../_components/Footer";
import Schedule from "./_sections/Schedule";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button if scrolled more than 300 pixels
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeroHome />
      <AboutUs />
      <Partners />
      <Facilities />
      <Fighters />
      <Coatches />
      <Schedule />
      <Location />
      <Sponsors />
      {/* <InstagramFollow /> */}
      <Footer />

      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="contained"
          color="error" // Use MUI color scheme
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "10px 15px",
            borderRadius: "5px",
            zIndex: 1000,
            opacity: 0.8, // Set initial opacity
            transition: "opacity 0.3s ease", // Smooth transition for opacity
            "&:hover": {
              backgroundColor: "#d32f2f", // Darker shade for hover effect
              opacity: 1, // Full opacity on hover
            },
            "&:active": {
              transform: "scale(0.95)", // Click effect
            },
          }}
        >
          ↑ Scroll To Top
        </Button>
      )}
    </>
  );
}
