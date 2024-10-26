import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";

export default function InstagramFollow() {
  // Step 1: Create a proper array of image objects
  const images = [
    { src: webp.Boxer1, alt: "boxer1" },
    { src: webp.Boxer2, alt: "boxer2" },
    { src: webp.Boxer3, alt: "boxer3" },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgFollow.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: {
            xs: "40px 20px 40px",
            sm: "60px 50px 60px",
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
          {/* Heading */}
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
              textAlign: "right",
            }}
          >
            follow on instagram
          </Typography>

          {/* Insta images */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "flex-end", sm: "center" },
              gap: "20px",
              flexDirection: { xs: "column", sm: "row" },
              paddingTop: {
                xs: "40px",
                sm: "60px",
                lg: "80px",
              },
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  height: "auto",
                  width: {
                    xs: "150px",
                    sm: "180px",
                    md: "200px",
                    lg: "265px",
                    xl: "350px",
                  },
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  src={image.src}
                  alt={image.alt}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
