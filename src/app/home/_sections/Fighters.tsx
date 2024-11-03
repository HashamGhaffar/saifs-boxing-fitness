import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";
import AOS from "aos";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fighterImages } from "@/app/constants/constants";
import FightersSlider from "../_components/FightersSlider";

export default function Fighters() {
  const [activeFighter, setActiveFighter] = useState("fighter3");
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url(bgFighters.webp)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: {
          xs: "40px 20px 40px",
          sm: "60px 50px 60px",
          md: "60px 50px 60px",
          lg: "80px 100px 80px",
        },
      }}
      className="project"
    >
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
        }}
      >
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "40px",
              lg: "48px",
              xl: "64px",
            },
            fontWeight: "400",
            fontFamily: "Anton, sans-serif",
            color: "#F63333",
            textTransform: "uppercase",
            paddingBottom: {
              xs: "30px",
              sm: "40px",
              xl: "80px",
            },
          }}
        >
          our schedule
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "50px", md: "70px", xl: "100px" },
            flexDirection: { xs: "column-reverse", lg: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "row", lg: "column" },
              gap: "25px",
            }}
          >
            {fighterImages.map((fighterImage, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "50px", md: "77px", xl: "90px" },
                  height: { xs: "50px", md: "77px", xl: "90px" },
                  position: "relative",
                }}
                onClick={() => {
                  setActiveFighter(fighterImage.id);
                  sliderRef.current?.slickGoTo(fighterImage.index);
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: "0",
                    outline: `${
                      activeFighter === fighterImage.id ? "2px" : "0px"
                    } solid #FFFFFF`,
                    filter:
                      activeFighter === fighterImage.id
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                  }}
                  src={fighterImage.imagePath}
                  alt={fighterImage.alt}
                />
              </Box>
            ))}
          </Box>

          {/* React Slick Slider */}
          <FightersSlider
            activeFighter={activeFighter}
            setActiveFighter={setActiveFighter}
            sliderRef={sliderRef}
          />
        </Box>
      </Box>
    </Box>
  );
}
