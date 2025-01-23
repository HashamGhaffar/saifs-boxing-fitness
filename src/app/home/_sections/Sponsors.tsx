import Image from "next/image";
import { useRouter } from "next/navigation";

import { Box, Typography } from "@mui/material";

import Button from "../../_components/Button";
import webp from "@/app/_assets/webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Sponsors() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const router = useRouter();
  // const imageData = [
  //   { src: webp.sponsor1, alt: "Kings sponsor logo" },
  //   { src: webp.sponsor2, alt: "Conquest sponsor logo" },
  //   { src: webp.sponsor3, alt: "Gold Star sponsor logo" },
  //   { src: webp.sponsor4, alt: "Harveys sponsor logo" },
  //   { src: webp.sponsor5, alt: "Homeflair sponsor logo" },
  //   { src: webp.sponsor6, alt: "Ideal Rooms sponsor logo" },
  //   { src: webp.sponsor7, alt: "Kitchens sponsor logo" },
  //   { src: webp.sponsor8, alt: "Lusso sponsor logo" },
  //   { src: webp.sponsor9, alt: "Road Runner sponsor logo" },
  //   { src: webp.sponsor10, alt: "Sabir Restaurant sponsor logo" },
  //   { src: webp.sponsor11, alt: "Swift sponsor logo" },
  // ];

  return (
    <>
      <Box
        sx={{
          // backgroundImage: "url(bgSponsors.webp)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh",
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
              // data-aos="fade-right"
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
              }}
            >
              our sponsors
            </Typography>
            <Box>
              <Button
                // data-aos="fade-left"
                // data-aos-duration="1000"
                onClick={() => router.push("contact-us")}
                textStyles={{ fontSize: "1rem" }}
              >
                Join Us
              </Button>
            </Box>
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
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "row",
                maxWidth: { lg: "1300px" },
                gap: "50px",
                columnGap: { sm: "40px", md: "60px", lg: "90px" },
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  maxWidth: "1300px",
                }}
                src={webp.AllSponsors}
                alt="all sponsors"
              />
              {/* {imageData.map((image, index) => (
                <Box
                  data-aos="zoom-in"
                  data-aos-duration="500"
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
              ))} */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
