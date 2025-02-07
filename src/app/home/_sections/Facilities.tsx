"use client";
import React from "react";
import Slider from "react-slick";
import webp from "@/app/_assets/webp";
import { Box, Grid, Modal, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import svgs from "@/app/_assets/svgs";
import { keyframes } from "@mui/system";

// const unfoldAnimation = keyframes`
//   0% { opacity: 0; transform: scale(0.95); }
//   100% { opacity: 1; transform: scale(1); }
// `;

// const unfoldAnimation = keyframes`

//    0%{
//   opacity:0;
//   transform: scale(0) translateX(-100%) translateY(200%) ;
//  }

// 100% {
//   opacity:1;
//   transform: scale(1) translate(-50%, -50%);
//  }
// `;

const unfoldAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.1) translate(-50%, -50%);
  }

  100% {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

export default function Facilities() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
  };

  const facilityImages = [
    {
      src: webp.F1,
      description:
        "Train with speed bags to improve hand-eye coordination and rhythm.",
    },
    {
      src: webp.F2,
      description:
        "Enhance strength with barbells, weight plates, and explosive power training.",
    },
    // { src: webp.F3, description: "Refine footwork and agility with a spacious, well-equipped boxing gym." },
    {
      src: webp.F4,
      description:
        "Step into the ring and experience professional boxing competition.",
    },
    {
      src: webp.F5,
      description:
        "Build strength with a complete set of dumbbells for weight training.",
    },
    {
      src: webp.F7,
      description:
        "Sharpen reflexes and hand speed using a professional-grade speed bag.",
    },
    {
      src: webp.F9,
      description:
        "Train in a motivational space with memorabilia and premium boxing equipment.",
    },
    {
      src: webp.F10,
      description:
        "Train like a champion in a full-size boxing ring for sparring.",
    },
    {
      src: webp.F11,
      description:
        "Develop powerful strikes using heavy bags in a dedicated boxing area.",
    },
    {
      src: webp.F12,
      description:
        "Train with professional-grade heavy bags to refine punching power, speed, and endurance.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<StaticImageData>(
    webp.F1
  );
  const [selectedImageText, setSelectedImageText] = React.useState<string>("");

  function openModal(
    selectedImage: StaticImageData,
    selectedImageText: string = "Build strength and conditioning, incorporating dumbbells and bodyweight exercises to keep your heart rate elevated. We have a wide range of bags including heavy, speed and aqua bags enabling boxers to practice all types of punches and techniques. We also have two full-size boxing rings, including a 20 foot olympic sized ring."
  ) {
    setSelectedImage(selectedImage);
    setSelectedImageText(selectedImageText);
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  // animation function
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  // close the modal on 10% scroll either direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercentage > 0.1 || scrollPercentage < 0.9) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgFacilities.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: {
            xs: "40px 20px 40px",
            sm: "60px 50px 60px",
            md: "60px 50px 60px",
            lg: "80px 100px 80px",
          },
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: "1600px",
            width: "100%",
          }}
        >
          {/* heading  */}
          <Typography
            // data-aos="fade-left"
            // data-aos-duration="1000"
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
              textAlign: "right",
              paddingBottom: {
                xs: "40px",
                sm: "60px",
                md: "60px",
                lg: "80px",
              },
            }}
          >
            our facilities
          </Typography>
          {/* grid images */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Grid
              data-aos="fade-up"
              data-aos-duration="500"
              container
              spacing={1.25}
            >
              <Grid item xs={12} sm={4} md={4}>
                <Box
                  sx={{
                    height: { sm: "100%" },
                    width: "auto",
                    overflow: "hidden",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", sm: "none", md: "block" },
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F12,
                        "Train with professional-grade heavy bags to refine punching power, speed, and endurance."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F12}
                      alt="facility1"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "block", md: "none" },
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F2,
                        "Enhance strength with barbells, weight plates, and functional tire workouts for explosive power."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F2}
                      alt="facility2"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <Box
                  sx={{
                    height: { sm: "100%" },
                    width: "auto",
                    overflow: "hidden",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", sm: "none", md: "block" },
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F2,
                        "Enhance strength with barbells, weight plates, and functional tire workouts for explosive power."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F2}
                      alt="facility2"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "block", md: "none" },
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F12,
                        "Train with professional-grade heavy bags to refine punching power, speed, and endurance."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F12}
                      alt="facility1"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={4}>
                <Box
                  sx={{
                    height: { sm: "100%" },
                    overflow: "hidden",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { sm: "100%" },
                      width: "auto",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F11,
                        "Spacious boxing facility with heavy bags, speed bags, and full-size rings for training."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F11}
                      alt="facility3"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Box
                  sx={{
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { sm: "100%" },
                      width: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F4,
                        "Step into the ring and test your skills with professional boxing training and competition."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F4}
                      alt="facility4"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Box
                  sx={{
                    height: { sm: "100%" },
                    overflow: "hidden",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { sm: "100%" },
                      width: "auto",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F5,
                        "Build strength with a full range of dumbbells for resistance and endurance training."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F5}
                      alt="facility5"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={4}>
                <Box
                  sx={{
                    height: { sm: "100%" },
                    overflow: "hidden",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { sm: "100%" },
                      width: "auto",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F9,
                        "A motivational space with boxing memorabilia, speed bags, and a dedicated training atmosphere."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={webp.F9}
                      alt="facility6"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                  <Box
                    sx={{
                      height: { sm: "100%" },
                      overflow: "hidden",
                      transition: "border 0.3s ease",
                      "&:hover": {
                        border: "1.5px solid #ffffff",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: { xs: "block", sm: "none", md: "block" },
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                      onClick={() =>
                        openModal(
                          webp.F7,
                          "Sharpen reflexes and hand speed with a professional-grade speed bag for precision training."
                        )
                      }
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={webp.F7}
                        alt="facility7"
                      />
                    </Box>

                    <Box
                      sx={{
                        display: { xs: "none", sm: "block", md: "none" },
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                      onClick={() =>
                        openModal(
                          webp.F10,
                          "Train like a champion in a full-size boxing ring designed for professional sparring."
                        )
                      }
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={webp.F10}
                        alt="facility8"
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Box
                  sx={{
                    height: { sm: "100%" },
                    width: "auto",
                    overflow: "hidden",
                    transition: "border 0.3s ease",
                    "&:hover": {
                      border: "1.5px solid #ffffff",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", sm: "none", md: "block" },
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F10,
                        "Train like a champion in a full-size boxing ring designed for professional sparring."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F10}
                      alt="facility8"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "block", md: "none" },
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() =>
                      openModal(
                        webp.F10,
                        "Train like a champion in a full-size boxing ring designed for professional sparring."
                      )
                    }
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F10}
                      alt="facility7"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* mobile slider here */}
          <Box
            sx={{
              width: "100%",
              padding: "30px",
              display: { xs: "block", sm: "none" },
            }}
          >
            <Slider {...settings}>
              {facilityImages.map((image, index) => (
                <Box key={index} sx={{ margin: "auto" }}>
                  <Box
                    sx={{
                      maxWidth: "350px",
                      aspectRatio: "1/1.5",
                      margin: "auto",
                    }}
                    onClick={() => openModal(image.src, image.description)}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      src={image.src}
                      alt={`facility image ${index + 1}`}
                    />
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>

      <Modal
        sx={{ backgroundColor: "rgba(42, 42, 42, 0.8)" }}
        open={isModalOpen}
        onClose={closeModal}
      >
        <Box
          sx={{
            height: { xs: "60vh", md: "50vh" },
            width: { xs: "80vw", md: "50vw" },
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "0",
            outline: "none",
            animation: `${unfoldAnimation} 0.6s ease-in-out`,
            overflow: "hidden",
          }}
        >
          <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
            {/* Close Button */}
            <Box
              onClick={closeModal}
              sx={{
                height: "auto",
                width: { xs: "25px", md: "30px", lg: "35px", xl: "40px" },
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: "30",
                cursor: "pointer",
                background:
                  "radial-gradient(rgba(0,0,0,0.4), rgba(255,255,255,0.4))",
                borderRadius: "50%",
                backdropFilter: "blur(4px)", // Optional: add blur effect
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
                src={svgs.Cross}
                alt="close"
              />
            </Box>

            {/* Background Image */}
            <Image
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "10",
              }}
              src={selectedImage}
              alt="facility background"
            />

            {/* Gradient Overlay and Text */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                bottom: "0",
                zIndex: "20",
                background:
                  "linear-gradient(180deg, rgba(13,13,13,0) 55%, #000000 91.79%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  maxWidth: { xs: "70vw", md: "40vw" },
                  textAlign: "left",
                  paddingBottom: { xs: "20px", lg: "40px" },
                }}
              >
                {selectedImageText}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
