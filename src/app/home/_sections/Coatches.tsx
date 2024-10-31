import React from "react";

import { Box, Typography } from "@mui/material";

import CoachesCard from "../_components/CoachesCard";
import ImageBox from "../_components/ImageBox";
import { CoachCardProps, Coaches } from "@/app/constants/constants";

export default function Coatches() {
  const [coaches, setCoaches] = React.useState<CoachCardProps[]>(Coaches);

  const handleCoachClick = (index: number) => {
    const updatedCoaches = coaches.map((coach, i) => {
      if (i === index) {
        return { ...coach, isSelected: true };
      }
      return { ...coach, isSelected: false };
    });
    setCoaches(updatedCoaches);
  };
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
          {coaches
            .filter((coach) => coach.isSelected)
            .map((coach, index) => (
              <CoachesCard
                key={index}
                name={coach.name}
                image={coach.image}
                backgroundImage={coach.backgroundImage}
                description={coach.description}
              />
            ))}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", lg: "20px" },
              paddingTop: { xs: "15px", sm: "20px", lg: "30px" },
            }}
          >
            {coaches.map((coach, index) => (
              <ImageBox
                key={index}
                src={coach.navImage}
                isSelected={coach.isSelected}
                onClick={() => handleCoachClick(index)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
