"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import svgs from "@/app/_assets/svgs";

export default function CoachingCardBox() {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "40px 20px 40px",
            sm: "60px 50px 60px",
            md: "60px 50px 60px",
            lg: "80px 100px 80px",
          },
          minHeight: "100vh",
          backgroundColor: "#2a2a2a",
        }}
      >
        <CoachingCard />
      </Box>
    </>
  );
}

export function CoachingCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        sx={{ maxWidth: { xs: "1200px", sm: "600px", md: "1200px" } }}
        container
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Image
              style={{ height: "100%", width: "100%" }}
              src={webp.Intro}
              alt="Intro"
            />
          </Box>
        </Grid>

        <Grid
          sx={{
            padding: { xs: "20px", md: "30px", xl: "45px" },
            backgroundColor: "#0D0D0D",
          }}
          item
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                  paddingBottom: { xs: "20px", lg: "30px" },
                }}
              >
                {/* image  */}
                <Box
                  sx={{
                    height: "100%",
                    maxWidth: {
                      xs: "50px",
                      lg: "60px",
                      xl: "80px",
                    },
                    width: "100%",
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={svgs.Clock}
                    alt="aksjfdalks"
                  />
                </Box>
                {/* timer messg */}
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: "20px", objectFit: "contain" }}
                    src={svgs.Timer}
                    alt="Timer"
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "300",
                      color: "#ffffff",
                    }}
                  >
                    5 min. per round
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "#F63333",
                  fontWeight: "400",
                  fontFamily: "Anton, sans-serif",
                  fontSize: {
                    xs: "24px",
                    sm: "30px",
                    md: "40px",
                    lg: "48px",
                    xl: "64px",
                  },
                }}
              >
                5 Min. Before Class{" "}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "400",
                color: "#ffffff",
                fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
                paddingTop: { xs: "10px", sm: "15px", md: "0" },
              }}
            >
              {`New here? Don’t worry, we’ve got you covered. In the 5 minutes
              before class starts, we’ll walk you through the six fundamental
              punches and explain the class format, so you'll be ready to jump
              right in with confidence.`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
