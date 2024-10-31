import webp from "@/app/_assets/webp";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Facilities() {
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
    </>
  );
}
