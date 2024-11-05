import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
  const paragraph = {
    xs: "16px",
    sm: "18px",
    md: "18px",
    lg: "20px",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: {
            xs: "20px 0px 0 20px",
            sm: "50px 0px 0 50px",
            md: "0px 0px 0 50px",
            lg: "0px 0px 0 100px",
          },
          backgroundImage: "url(bgAboutUs.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          alignItems: "center",
          height: { md: "60vh" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "1600px",
            width: "100%",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid container alignItems="center" item md={6} sm={10} xs={10}>
              {/* textual content  */}
              <Box
                data-aos="fade-right"
                sx={{
                  maxWidth: {
                    xs: "500px",
                    sm: "700px",
                    md: "700px",
                    lg: "900px",
                  },
                  width: "100%",
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
                  }}
                >
                  about us
                </Typography>
                <Typography
                  sx={{
                    fontSize: { ...paragraph },
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  We&apos;re passionate about empowering individuals through the
                  art of boxing. Our mission is to build strength, confidence,
                  and skill in every member, no matter their level. With a team
                  of experienced trainers, we offer personalized coaching and
                  state-of-the-art facilities. From beginners to seasoned
                  fighters, we help you unlock your full potential. Join us and
                  experience the discipline, camaraderie, and thrill of boxing.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* boxer image  */}
        <Box
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "400px",
              md: "600px",
              xl: "800px",
            },
            width: "100%",
            height: "auto",
            position: { md: "absolute" },
            bottom: "0",
            right: { md: "20px", lg: "50px", xl: "100px" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "300px",
                sm: "400px",
                md: "450px",
                xl: "500px",
              },
              height: "100%",
              width: "100%",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                margin: "0 0 -3px 0",
              }}
              src={webp.BoxerAboutUS2}
              alt="BoxerAboutUS"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
