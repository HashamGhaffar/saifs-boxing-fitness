import Navbar from "@/app/_components/Navbar";
import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          minHeight: "70vh",
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
          <Box
            sx={{
              animation: "slideInFromLeft 2s ease-in-out forwards",
              "@keyframes slideInFromLeft": {
                "0%": {
                  transform: "translateX(-100%)",
                  opacity: 0,
                },
                "100%": {
                  transform: "translateX(0%)",
                  opacity: 1,
                },
              },
            }}
          >
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
                  md: "31px",
                  lg: "39px",
                  xl: "51px",
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
                  // sm: "40px",
                  md: "60px",
                  lg: "80px",
                  xl: "90px",
                },
                fontWeight: "400",
                fontSize: {
                  xs: "50px",
                  md: "80px",
                  lg: "100px",
                  xl: "120px",
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
