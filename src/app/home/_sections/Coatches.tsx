import { Box, Typography, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import webp from "@/app/_assets/webp";
import React from "react";

interface CoachCardProps {
  name: string;
  description: string;
  image: StaticImageData;
  backgroundImage: string;
  navImage: StaticImageData;
  isSelected?: boolean;
}

const Coaches: CoachCardProps[] = [
  {
    name: "James Adam",
    description: `Coach "James Adam" is a seasoned boxing expert with over 15
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
confidence, and discipline qualities.<br><br>
With a background in both amateur and professional boxing, he
brings a wealth of knowledge and a hands-on approach to every
session. His focus is not just on perfecting technique, but
also on building mental toughness, confidence, and discipline
qualities.
`,
    image: webp.CoachJames,
    backgroundImage: "url(bgCoachJames.webp)",
    navImage: webp.NavJames,
    isSelected: true,
  },
  {
    name: "Daniel",
    description: `Coach “Daniel Jayson” is a highly respected boxing coach with 
    a reputation for transforming fighters into champions. With over a decade of
     experience, his approach combines technical precision, strategic insight, and
      an emphasis on mental resilience. His training sessions are intense, yet supportive, 
      helping each boxer develop their own unique style while mastering the fundamentals. 
      From first-timers to seasoned pros, she pushes everyone to exceed their own expectations.
      <br><br>
      Beyond his boxing expertise, he is known for her ability to inspire and uplift his fighters. 
      He believes that boxing is as much about building character as it is about learning technique.`,
    image: webp.CoachJames,
    backgroundImage: "url(bgCoachJames.webp)",
    navImage: webp.NavJames,
    isSelected: false,
  },
];

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

// Coaches Card Component

const ImageBox: React.FC<{
  src: StaticImageData;
  isSelected?: boolean;
  onClick?: () => void;
}> = ({ src, isSelected = false, onClick = () => {} }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        height: "auto",
        width: { xs: "30px", sm: "40px", lg: "77px" },
        outline: `${isSelected ? "2px" : "0px"} solid #FFFFFF`,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          filter: isSelected ? "grayscale(0%)" : "grayscale(100%)",
        }}
        src={src}
        alt="coach image"
      />
    </Box>
  );
};

function CoachesCard({
  name,
  image,
  backgroundImage,
  description,
}: {
  name: string;
  image: StaticImageData;
  backgroundImage: string;
  description: string;
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: {
            xs: "20px 30px 0 20px",
            sm: "30px 30px 0 30px",
            lg: "30px 50px 0 30px",
          },
          backgroundImage: `${backgroundImage}`,
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
                {name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#ffffff",
                  fontSize: { xs: "12px", md: "14px", xl: "18px" },
                }}
              >
                {/* {description} */}
                {description.split("<br>").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
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
                src={image}
                alt="CoachJames"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
