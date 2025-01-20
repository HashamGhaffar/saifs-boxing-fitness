import Navbar from "@/app/_components/Navbar";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroHome() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url(bgHero.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Navbar />
        <Box
          sx={{
            padding: {
              xs: "20px 20px",
              sm: "20px 30px",
              md: "20px 50px",
              lg: "20px 100px",
              xl: "0",
            },
            maxWidth: "1600px",
            width: "100%",
            position: "absolute",
            transform: "translate(-50% , -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          <Box>
            <Typography
              // data-aos="fade-right"
              // data-aos-duration="1000"
              sx={{
                textTransform: "uppercase",
                textAlign: { xl: "center" },
                fontWeight: "900",
                color: "transparent",
                WebkitTextStroke: {
                  xs: ".65px white",
                  md: "1px white",
                  lg: "2px white",
                },
              }}
              fontSize={{
                xs: "20px",
                sm: "31px",
                md: "39px",
                lg: "51px",
                xl: "70px",
              }}
            >
              Unleash Your Inner
            </Typography>
            <Typography
              // data-aos="fade-left"
              // data-aos-duration="1000"
              sx={{
                textTransform: "uppercase",
                textAlign: { xl: "center" },
                fontFamily: "Anton, sans-serif",
                color: "#F63333",
                lineHeight: {
                  xs: "45px",
                  sm: "65px",
                  md: "80px",
                  lg: "100px",
                  xl: "135px",
                },
                fontWeight: "400",
                fontSize: {
                  xs: "50px",
                  sm: "80px",
                  md: "100px",
                  lg: "130px",
                  xl: "180px",
                },
              }}
            >
              Champion
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
