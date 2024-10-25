import { Box, Typography } from "@mui/material";
// import webp form "../../"
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
            xs: "50px 20px 50px 20px",
            sm: "70px 50px 70 50px",
            md: "10px 0px 0 50px",
            lg: "20px 0px 0 100px",
          },
          backgroundImage: "url(bgAboutUs.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            maxWidth: "1600px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "0" },
          }}
        >
          {/* textual content  */}
          <Box
            sx={{
              paddingBottom: {},
              maxWidth: { xs: "500px", sm: "700px", md: "700px", lg: "900px" },
              width: "100%",
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
              We&apos;re passionate about empowering individuals through the art
              of boxing. Our mission is to build strength, confidence, and skill
              in every member, no matter their level. With a team of experienced
              trainers, we offer personalized coaching and state-of-the-art
              facilities. From beginners to seasoned fighters, we help you
              unlock your full potential. Join us and experience the discipline,
              camaraderie, and thrill of boxing.
            </Typography>
          </Box>
          {/* image  */}
          <Box
            sx={{
              maxWidth: { xs: "300px", sm: "400px", md: "600px", xl: "800px" },
              width: "100%",
              height: "auto",
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
      </Box>
    </>
  );
}
