"use client";
import React from "react";
import webp from "@/app/_assets/webp";
import { Box, Grid, Modal, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Facilities() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<StaticImageData>(
    webp.F1
  );
  const [selectedImageText, setSelectedImageText] = React.useState<string>("");

  function openModal(
    selectedImage: StaticImageData,
    selectedImageText: string = "Build strength and conditioning, incorporating dumbbells and bodyweight exercises to keep your heart rate elevated."
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
            data-aos="fade-left"
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
          <Grid
            data-aos="fade-right"
            data-aos-duration="1000"
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
                  onClick={() => openModal(webp.F1)}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F1}
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
                  onClick={() => openModal(webp.F2)}
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
                  onClick={() => openModal(webp.F2)}
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
                  onClick={() => openModal(webp.F1)}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F1}
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
                  onClick={() => openModal(webp.F3)}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F3}
                    alt="facility3"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Box
                sx={{
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
                  onClick={() => openModal(webp.F4)}
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
                  onClick={() => openModal(webp.F5)}
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
                  onClick={() => openModal(webp.F6)}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F6}
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
                    onClick={() => openModal(webp.F7)}
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
                    onClick={() => openModal(webp.F8)}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={webp.F8}
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
                  onClick={() => openModal(webp.F8)}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F8}
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
                  onClick={() => openModal(webp.F7)}
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
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            height: { xs: "60vh", md: "50vh" },
            width: { xs: "80vw", md: "50vw" },
            backgroundColor: "red",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "0",
            outline: "none",
          }}
        >
          <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
            <Image
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "10",
              }}
              src={selectedImage}
              alt="facility1"
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                bottom: "0",
                zIndex: "20",
                background:
                  "linear-gradient(180deg, rgba(13, 13, 13, 0) 55%, #000000 91.79%)",
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
