import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Coatches() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgCoaches.webp)",
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
            data-aos="fade-left"
            data-aos-duration="1000"
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
            our coaches
          </Typography>
          {/* coatch card */}
          <Box
            data-aos="fade-right"
            data-aos-duration="1000"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: {
                xs: "20px 30px 0 20px",
                sm: "30px 30px 0 30px",
                lg: "30px 50px 0 30px",
              },
              backgroundImage: "url(bgCoachJames.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              gap: { xs: "", sm: "", md: "", lg: "", xl: "50px" },
            }}
          >
            <Grid
              // alignItems="flex-end"
              justifyContent="space-between"
              container
            >
              <Grid item xs={12} md={7.5}>
                {/* coach details  */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "10px", xl: "20px" },
                    paddingBottom: { xs: "10px", sm: "20px", xl: "40px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      color: "#ffffff",
                      fontSize: {
                        xs: "22px",
                        sm: "24px",
                        lg: "26px",
                      },
                    }}
                  >
                    James Adam
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "#ffffff",
                      fontSize: { xs: "12px", md: "14px", xl: "18px" },
                    }}
                  >
                    {`Coach "James Adam" is a seasoned boxing expert with over 15
                  years of experience in the ring. Known for his relentless
                  drive and attention to detail, he has trained everyone from
                  beginners to competitive fighters, tailoring his approach to
                  fit each individual’s needs. His unique blend of technical
                  mastery and motivational coaching style makes him a favorite
                  among those who want to push past their limits and unlock
                  their full potential. With a background in both amateur and
                  professional boxing, he brings a wealth of knowledge and a
                  hands-on approach to every session. His focus is not just on
                  perfecting technique, but also on building mental toughness,
                  confidence, and discipline qualities.`}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "#ffffff",
                      fontSize: { xs: "12px", md: "14px", xl: "18px" },
                    }}
                  >
                    {`With a background in both amateur and professional boxing, he
                  brings a wealth of knowledge and a hands-on approach to every
                  session. His focus is not just on perfecting technique, but
                  also on building mental toughness, confidence, and discipline
                  qualities.`}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                sx={{
                  position: "relative",
                  display: { xs: "none", md: "flex" },
                  alignItems: "flex-end",
                }}
                item
                xs={0}
                md={4}
                lg={4}
                xl={4}
              >
                {/* coach image  */}
                <Box
                  sx={{
                    // height: "100%",
                    display: { xs: "none", md: "flex" },
                    alignItems: "flex-end",
                    height: {
                      xs: "auto",
                      sm: "280px",
                      lg: "290px",
                      xl: "400px",
                    },
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={webp.CoachJames}
                    alt="CoachJames"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            sx={{
              display: "flex",
              gap: { xs: "10px", lg: "20px" },
              paddingTop: { xs: "15px", sm: "20px", lg: "30px" },
            }}
          >
            <Box
              sx={{
                height: "auto",
                width: { xs: "30px", sm: "40px", lg: "77px" },
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={webp.NavJames}
                alt="NavJames"
              />
            </Box>
            <Box
              sx={{
                height: "auto",
                width: { xs: "30px", sm: "40px", lg: "77px" },
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={webp.NavDaniel}
                alt="NavJames"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
