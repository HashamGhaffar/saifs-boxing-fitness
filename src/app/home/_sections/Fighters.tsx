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
          margin: "0 auto",
        }}
      >
        <Typography
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
          Our Champions
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box
            data-aos="fade-up"
            data-aos-duration="500"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", xl: "space-between" },
              alignItems: "center",
              gap: { xs: "50px", md: "70px", xl: "100px" },
              flexDirection: { xs: "column-reverse", lg: "row" },
              maxWidth: "1250px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "row", lg: "column" },
                gap: "15px",
              }}
            >
              {fighterImages.map((fighterImage, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "60px", md: "60px", xl: "80px" },
                    height: { xs: "60px", md: "60px", xl: "80px" },
                    position: "relative",
                  }}
                  onClick={() => {
                    setActiveFighter(fighterImage.id);
                    sliderRef.current?.slickGoTo(fighterImage.index, true);
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: "0",
                      // border: "1px solid white",
                      border: `${
                        activeFighter === fighterImage.id
                          ? "2px  solid #FFFFFF"
                          : "2px solid grey"
                      }`,
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
    </Box>
  );
}
