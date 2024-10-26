import { Box, Typography } from "@mui/material";
import Button from "../../_components/Button";
import Image from "next/image";
import webp from "@/app/_assets/webp";

export default function Sponsors() {
  const imageData = [
    { src: webp.Monster, alt: "Monster energy drink logo" },
    { src: webp.Fila, alt: "Fila sportswear logo" },
    { src: webp.FR, alt: "Food Rider service logo" },
    { src: webp.Aon, alt: "AON company logo" },
    { src: webp.Adidas, alt: "Adidas brand logo" },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgSponsors.webp)",
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
          {/* header  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* heading  */}
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
                //   textAlign: "right",
              }}
            >
              our sponsors
            </Typography>
            <Button textStyles={{ fontSize: "1rem" }}>Join Us</Button>
          </Box>

          <Box
            sx={{
              paddingTop: {
                xs: "40px",
                sm: "60px",
                lg: "60px",
                xl: "80px",
              },
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: { xs: "column", sm: "row" },
                maxWidth: "1300px",
                rowGap: "30px",
                columnGap: { sm: "40px", md: "60px", lg: "90px" },
              }}
            >
              {imageData.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    height: "auto",
                    width: {
                      xs: "150px",
                      md: "200px",
                      lg: "250px",
                      xl: "320px",
                    },
                    // width: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={image.src}
                    alt={image.alt}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
