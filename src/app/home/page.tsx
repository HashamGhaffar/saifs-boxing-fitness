"use client";

import { useEffect, useState } from "react";
import HeroHome from "./_sections/HeroHome";
import AboutUs from "./_sections/AboutUs";
import Partners from "./_sections/Partner";
import Facilities from "./_sections/Facilities";
import Fighters from "./_sections/Fighters";
import Coatches from "./_sections/Coaches";
import Location from "./_sections/Location";
import Sponsors from "./_sections/Sponsors";
import Footer from "../_components/Footer";
import Schedule from "./_sections/Schedule";
import svgs from "../_assets/svgs";
import Image from "next/image";
import { Box } from "@mui/material";

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
      <Footer />

      {isVisible && (
        <Box
          sx={{
            position: "fixed",
            bottom: { xs: "30px", lg: "50px" },
            right: { xs: "30px", lg: "50px" },
            zIndex: 1000,
            opacity: 0.6,
            transition: "opacity 0.3s ease",
            "&:hover": {
              opacity: 1,
            },
            "&:active": {
              transform: "scale(0.95)",
            },
            height: "auto",
            width: { xs: "30px", md: "50px", xl: "70px" },
          }}
        >
          <Image
            onClick={scrollToTop}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={svgs.ScrollTop}
            alt="scroll top"
          />
        </Box>
      )}
    </>
  );
}
