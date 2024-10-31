import Navbar from "@/app/_components/Navbar";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
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
          <Box data-aos="fade-right">
            <Typography
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
                fontSize: {
                  xs: "20px",
                  md: "20px",
                  lg: "24px",
                  xl: "32px",
                },
              }}
            >
              Unleash Your Inner
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: { xl: "center" },
                fontFamily: "Anton, sans-serif",
                color: "#F63333",
                lineHeight: {
                  xs: "45px",
                  md: "42px",
                  lg: "50px",
                  xl: "64px",
                },
                fontWeight: "400",
                fontSize: {
                  xs: "50px",
                  md: "50px",
                  lg: "64px",
                  xl: "80px",
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
