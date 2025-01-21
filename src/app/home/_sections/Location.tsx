import MapComponent from "../../_components/Map";
import { Box, Typography } from "@mui/material";
// import Image from "next/image";
// import webp from "@/app/_assets/webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Location() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
  const heading = {
    fontSize: {
      xs: "22px",
      sm: "24px",
      lg: "26px",
    },
    color: "#ffffff",
    fontWeight: "700",
    textTransform: "uppercase",
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgLocation.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
      >
        <Box
          sx={{
            maxWidth: "1600px",
            width: "100%",
          }}
        >
          {/* heading  */}
          <Typography
            // data-aos="zoom-in-down"
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
            our location
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* location  */}
            <Box
              data-aos="fade-up"
              data-aos-duration="500"
              sx={{
                width: {
                  xs: "100%",
                  md: "500px",
                  lg: "600px",
                  xl: "700px",
                },
                height: {
                  xs: "300px",
                  sm: "400px",
                  lg: "400px",
                  xl: "450px",
                },
              }}
            >
              <MapComponent />
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-duration="500"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {/* location  text  */}
              <Box
                sx={{
                  padding: { xs: "10px", md: "20px" },
                  textAlign: "left",
                  border: { xs: "1px solid #ffffff", md: "3px solid #ffffff" },
                  backgroundColor: "#0D0D0D80",
                }}
              >
                <Typography
                  sx={{
                    ...heading,
                  }}
                >
                  location
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "400",
                    fontSize: { xs: "12px", md: "14px", xl: "18px" },
                    paddingTop: "15px",
                  }}
                >
                  1-5 Canklow Rd, Rotherham S60 2JB, United Kingdom
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: { xs: "10px", md: "20px" },
                  textAlign: "left",
                  border: { xs: "1px solid #ffffff", md: "3px solid #ffffff" },
                  backgroundColor: "#0D0D0D80",
                }}
              >
                <Typography
                  sx={{
                    ...heading,
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "400",
                    fontSize: { xs: "12px", md: "14px", xl: "18px" },
                    paddingTop: "15px",
                  }}
                >
                  +447860606986
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: { xs: "10px", md: "20px" },
                  textAlign: "left",
                  border: { xs: "1px solid #ffffff", md: "3px solid #ffffff" },
                  backgroundColor: "#0D0D0D80",
                }}
              >
                <Typography
                  sx={{
                    ...heading,
                  }}
                >
                  email
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "400",
                    fontSize: { xs: "12px", md: "14px", xl: "18px" },
                    paddingTop: "15px",
                  }}
                >
                  info@saifsboxing.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
