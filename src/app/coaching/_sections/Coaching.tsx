"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import webp from "@/app/_assets/webp";
import svgs from "@/app/_assets/svgs";

// Define prop types for CoachingCard
interface CoachingCardProps {
  introImage: StaticImageData;
  clockImage: StaticImageData;
  timerText: string;
  headingText: string;
  descriptionText: string;
  backgroundColor: string;
}

export default function CoachingCardBox() {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px 0 20px",
          sm: "60px 50px 0 50px",
          md: "60px 50px 0 50px",
          lg: "80px 100px 0 100px",
        },
        minHeight: "100vh",
        backgroundColor: "#2a2a2a",
      }}
    >
      <CoachingCard
        introImage={webp.Intro}
        clockImage={svgs.Clock}
        timerText="5 min. per round"
        headingText="5 Min. Before Class"
        descriptionText={`New here? Don’t worry, we’ve got you covered. In the 5 minutes
          before class starts, we’ll walk you through the six fundamental
          punches and explain the class format, so you'll be ready to jump
          right in with confidence.`}
        backgroundColor="#0D0D0D"
      />
      <CoachingCard
        introImage={webp.Drumbbell}
        clockImage={svgs.Exercise}
        timerText="5 min. per round"
        headingText="Warm Up"
        descriptionText={`Get ready because things are about to heat up. Before hitting the bags, we’ll kick things off with a high-energy, cardio-packed warm-up to get your blood pumping.`}
        backgroundColor="none"
      />
      <CoachingCard
        introImage={webp.Punching}
        clockImage={svgs.Gloves}
        timerText="3 rounds - punching"
        headingText="3 Rounds - Punching"
        descriptionText={`Glove up — it’s time to go all in. Three rounds on the heavy bags: You’ll master the 6 essential punches, throwing combos that keep it simple but still leave you feeling like a champ. In between rounds, you’ll get active recovery to catch your breath and gear up for the next punch-packed set.`}
        backgroundColor="#0D0D0D"
      />
      <CoachingCard
        introImage={webp.WarmUp}
        clockImage={svgs.Drumbbells}
        timerText="3 rounds - dumbbell"
        headingText="3 Rounds - Dumbbell"
        descriptionText={`Switch it up — you’ll drop down for strength and conditioning, incorporating dumbbells and bodyweight exercises to keep your heart rate elevated. Between each set on the floor, you’ll take a brief active recovery before jumping back in for more.`}
        backgroundColor="none"
      />
    </Box>
  );
}

export function CoachingCard({
  introImage,
  clockImage,
  timerText,
  headingText,
  descriptionText,
  backgroundColor,
}: CoachingCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: {
          xs: "40px",
          sm: "60px",
          md: "60px",
          lg: "80px",
        },
      }}
    >
      <Grid
        sx={{ maxWidth: { xs: "1200px", sm: "600px", md: "1200px" } }}
        container
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Image
              style={{ height: "100%", width: "100%" }}
              src={introImage}
              alt="Intro"
            />
          </Box>
        </Grid>

        <Grid
          sx={{
            padding: { xs: "20px", md: "30px", xl: "45px" },
            backgroundColor: backgroundColor,
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
                {/* Clock Image */}
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
                    src={clockImage}
                    alt="Clock"
                  />
                </Box>
                {/* Timer Message */}
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
                    {timerText}
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
                    xl: "60px",
                  },
                }}
              >
                {headingText}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "400",
                color: "#ffffff",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "12px",
                  lg: "14px",
                  xl: "18px",
                },
                paddingTop: { xs: "10px", sm: "15px", md: "0" },
              }}
            >
              {descriptionText}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
