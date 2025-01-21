"use client";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import webp from "@/app/_assets/webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const text = {
  fontWeight: "400",
  color: "#ffffff",
  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
};

export default function ClassGroup() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <Class
        Heading="Intro Class"
        description1={`An "Intro Class" is the perfect starting point for anyone new to
                    boxing, offering a safe and supportive environment to learn the
                    basics. In this beginner-friendly session, participants are
                    introduced to essential boxing techniques like proper stance,
                    footwork, and basic punches. The class also focuses on building
                    strength, endurance, and agility, making it ideal for those
                    looking to improve overall fitness while learning the fundamentals
                    of the sport.`}
        description2={`Led by experienced trainers, the Intro Class emphasizes proper
                    form and technique to ensure participants develop a strong
                    foundation. Whether you're looking to pursue boxing competitively
                    or as a workout routine, this class offers a great opportunity to
                    build confidence, improve coordination, and experience the
                    intensity of boxing in a welcoming atmosphere. No prior experience
                    is required—just bring your energy and enthusiasm!`}
        imageSrc={webp.Intro}
        imageAlt="Intro"
        headingAlignment={{ textAlign: "left" }}
        backgroundColor={{ backgroundColor: "#fff" }}
        textColor={{ color: "#2a2a2a" }}
        alignment={{ xs: "column", lg: "row" }}
      />
      <Class
        Heading="signature o.g."
        description1={`"Signature O.G" represents the essence of classic boxing, 
          combining timeless techniques with the spirit of the sport’s pioneers.
           It's all about honoring the original grit, determination, and craftsmanship
            that defined boxing in its early days. The phrase encapsulates the raw, authentic 
            style of fighters who built the foundation of the sport with their blood, sweat,
             and relentless discipline.`}
        description2={`In today’s boxing scene, Signature O.G. stands as a reminder of the roots and traditions that shaped the sport. It highlights a respect for the fundamentals—perfecting footwork, mastering defense, and delivering powerful, strategic punches—elements that still form the backbone of any champion. For those passionate about preserving the purity of boxing, Signature O.G. embodies the core values that make the sport legendary.`}
        imageSrc={webp.Signature}
        imageAlt="Signature"
        headingAlignment={{ textAlign: "right" }}
        backgroundColor={{ backgroundColor: "#0D0D0D" }}
        textColor={{ color: "#fff" }}
        alignment={{ xs: "column", lg: "row-reverse" }}
      />
      <Class
        Heading="5 v 5 class"
        description1={`A "5 v 5 Class" is an exciting group boxing session designed to build both fitness and camaraderie. In this dynamic class, two teams of five face off in a series of intense, fast-paced drills that combine technique, agility, and strength. Each participant gets the chance to work on combinations, footwork, and defensive skills, all while pushing their limits in a fun, competitive environment.`}
        description2={`Whether you’re a seasoned boxer or just starting out, the 5 v 5 class offers an engaging way to improve your boxing skills and overall fitness. With personalized coaching and a team-based atmosphere, this class is perfect for those looking to challenge themselves and stay motivated in their boxing journey.`}
        imageSrc={webp.Intro}
        imageAlt="Intro"
        headingAlignment={{ textAlign: "left" }}
        backgroundColor={{ backgroundColor: "#fff" }}
        textColor={{ color: "#2a2a2a" }}
        alignment={{ xs: "column", lg: "row" }}
      />
    </>
  );
}

interface ClassProps {
  Heading: string;
  description1: string;
  description2: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  headingAlignment?: React.CSSProperties;
  backgroundColor?: React.CSSProperties;
  textColor?: React.CSSProperties;
  alignment?: { xs: string; lg: string };
}

export function Class({
  Heading,
  description1,
  description2,
  imageSrc,
  imageAlt,
  headingAlignment,
  backgroundColor,
  textColor,
  alignment,
}: ClassProps) {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px 40px",
          sm: "60px 50px 60px",
          md: "60px 50px 60px",
          lg: "80px 100px 80px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        ...backgroundColor,
      }}
    >
      <Box>
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
            width: "100%",
            ...headingAlignment,
          }}
        >
          {Heading}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            // flexDirection: { xs: "column", lg: "row" },
            paddingTop: { xs: "10px", sm: "15px", md: "30px", xl: "40px" },
            alignItems: { xs: "center", lg: "flex-start" },
            flexDirection: alignment ? { ...alignment } : "column",
          }}
        >
          {/* Typography box */}
          <Box
            data-aos="fade-up"
            data-aos-duration="500"
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "500px",
                md: "600px",
                lg: "550px",
                xl: "700px",
              },
              display: "flex",
              flexDirection: "column",
              gap: { xs: "8px", md: "20px" },
            }}
          >
            <Typography sx={{ ...text, ...textColor }}>
              {description1}
            </Typography>
            <Typography sx={{ ...text, ...textColor }}>
              {description2}
            </Typography>
          </Box>

          {/* Image */}
          <Box
            data-aos="fade-up"
            data-aos-duration="1000"
            sx={{
              height: "auto",
              maxWidth: {
                xs: "100%",
                sm: "500px",
                md: "600px",
                lg: "600px",
                xl: "700px",
              },
              width: "100%",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={imageSrc}
              alt={imageAlt}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
