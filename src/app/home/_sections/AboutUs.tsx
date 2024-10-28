import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";

export default function AboutUs() {
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
          padding: {
            xs: "0px 0px 0 20px",
            sm: "0px 0px 0 50px",
            md: "0px 0px 0 50px",
            lg: "0px 0px 0 100px",
          },
          backgroundImage: "url(bgAboutUs.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          alignItems: "center",
          height: "60vh",
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
                sx={{
                  paddingBottom: {},
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
          sx={{
            maxWidth: {
              xs: "300px",
              sm: "400px",
              md: "600px",
              xl: "800px",
            },
            width: "100%",
            height: "auto",
            display: { xs: "none", md: "block" },
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "drop-shadow(10px 4px 8px rgba(13, 13, 13))",
              margin: "0 0 -3px 0",
            }}
            src={webp.BoxerAboutUS}
            alt="BoxerAboutUS"
          />
        </Box>
      </Box>
    </>
  );
}
