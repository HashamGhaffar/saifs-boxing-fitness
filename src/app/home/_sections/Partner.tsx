"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Partners() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const partnerImages = [
    webp.Jm,
    webp.PrimarySchool,
    webp.Rotherham,
    webp.WickersleyPartnership,
    webp.WinterHillSchool,
    webp.FundraisingRegulator,
    // repeat
    webp.Jm,
    webp.PrimarySchool,
    webp.Rotherham,
    webp.WickersleyPartnership,
    webp.WinterHillSchool,
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: { sm: "40vh" },
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          data-aos="fade-down"
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
            textAlign: "center",
            paddingBottom: { xs: "60px", sm: "50px" },
          }}
        >
          Our Partners
        </Typography>

        {/* Slider for Partner Images */}
        <Slider {...settings}>
          {partnerImages.map((image, index) => (
            <Box
              data-aos="flip-up"
              data-aos-duration="1000"
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  maxWidth: {
                    xs: "140px",
                    sm: "150px",
                    md: "200px",
                    lg: "250px",
                  },
                  height: "auto",
                  mx: "auto",
                  aspectRatio: "2/1",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={image}
                  alt={`Partner Image ${index + 1}`}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
