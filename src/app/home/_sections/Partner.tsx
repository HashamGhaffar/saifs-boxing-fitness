"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Partners() {
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
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const partnerImages = [
    // whide spaces in google
    // webp.Google,
    webp.Amazon,
    webp.Hardees,
    webp.Aon,
    webp.FRider,
    webp.Spotify,

    // repeat

    webp.Hardees,
    webp.Aon,
    webp.FRider,
    webp.Spotify,
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: { xs: "20px", sm: "30px", md: "50px" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "22px",
              sm: "28px",
              md: "36px",
              lg: "47px",
              xl: "64px",
            },
            fontWeight: "400",
            fontFamily: "Anton, sans-serif",
            color: "#F63333",
            textTransform: "uppercase",
            textAlign: "center",
            paddingBottom: { xs: "20px", sm: "30px", md: "50px" },
          }}
        >
          Our Partners
        </Typography>

        {/* Slider for Partner Images */}
        <Slider {...settings}>
          {partnerImages.map((image, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "cneter" }}>
              <Box
                sx={{
                  maxWidth: {
                    xs: "90px",
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
