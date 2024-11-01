import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import webp from "@/app/_assets/webp";

// Array of fighter data
const fighters = [
  {
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter2,
  },
];

export default function Fighters() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url(bgFighters.webp)",
        backgroundSize: "cover",
        backgroundPosition: "top",
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
        {/* heading */}
        <Typography
          data-aos="fade-right"
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
            paddingBottom: {
              xs: "30px",
              sm: "40px",
              xl: "80px",
            },
          }}
        >
          our schedule
        </Typography>

        {/* card box */}
        <Box>
          {fighters.map((fighter, index) => (
            <FighterCard
              key={index}
              name={fighter.name}
              description={fighter.description}
              imageSrc={fighter.imageSrc}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

type FighterCardProps = {
  name: string;
  description: string;
  imageSrc: string | StaticImageData;
};

export function FighterCard({ name, description, imageSrc }: FighterCardProps) {
  return (
    <Box
      sx={{
        width: {
          xs: "200px",
          sm: "250px",
          md: "300px",
          borderWidth: { xs: "1px", md: "1.7px" },
          borderStyle: "solid",
          borderColor: "#ffffff",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "300px",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          src={imageSrc}
          alt={name}
        />
      </Box>

      <Box
        sx={{
          padding: {
            xs: "10px",
            md: "13px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          backgroundColor: "#0D0D0DB2",
          marginTop: "-3px",
          borderTopWidth: { xs: "1px", md: "1.7px" },
          borderTopStyle: "solid",
          borderTopColor: "#ffffff",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontFamily: "lato, sans-serif",
            fontSize: { xs: "14px", md: "16px", lg: "18px" },
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "#ffffff",
            fontWeight: "400",
            fontFamily: "lato, sans-serif",
            fontSize: "12px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
