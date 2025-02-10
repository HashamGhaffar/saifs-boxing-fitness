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
        Heading="Boxing For Education"
        description1={`At Saifs Boxing Gym, our head coach dedicates one day a week at 
                    Winterhill School in Rotherham, where he works with children facing 
                    behavioural challenges. His sessions focus on teaching discipline 
                    through boxing, encouraging these young people to channel their 
                    energy positively. By engaging in structured training, the children 
                    learn respect, resilience, and self‐control—qualities that not only 
                    enhance their physical well‑being but also lay a foundation for 
                    academic improvement..`}
        description2={`In these sessions, boxing becomes a medium for personal growth 
                    beyond the gym. The head coach tailors programmes that support both 
                    the sporting and educational development of the children. By 
                    instilling a sense of routine and commitment, he helps them build 
                    confidence in the classroom and in life, transforming challenges into 
                    opportunities for success.`}
        imageSrc={webp.Intro}
        imageAlt="Intro"
        headingAlignment={{ textAlign: "left" }}
        backgroundColor={{ backgroundColor: "#fff" }}
        textColor={{ color: "#2a2a2a" }}
        alignment={{ xs: "column", lg: "row" }}
      />
      <Class
        Heading="Boxing For Less-Fortunate"
        description1={`At Saifs Boxing Gym, our commitment extends to supporting 
                    the less fortunate in the community. We work closely with local 
                    charities to deliver specialised sessions for children who suffer 
                    from autism and other mental health challenges. These carefully 
                    designed programmes help create a supportive environment where the 
                    children can develop social skills and experience the positive 
                    benefits of physical exercise, fostering both mental and physical well‑being.`}
        description2={`During school holidays, we further our efforts by offering sessions 
                    to children from low‑income families, ensuring equal opportunities for all. 
                    By removing barriers to access, our initiatives empower young people through 
                    sport, boosting their confidence and teaching them valuable life skills. 
                    This work reflects our dedication to inclusivity and our belief in giving every 
                    child the chance to thrive.`}
        imageSrc={webp.Signature}
        imageAlt="Signature"
        headingAlignment={{ textAlign: "right" }}
        backgroundColor={{ backgroundColor: "#0D0D0D" }}
        textColor={{ color: "#fff" }}
        alignment={{ xs: "column", lg: "row-reverse" }}
      />
      <Class
        Heading="Boxing For Charity"
        description1={`Saifs Boxing Gym proudly supports a range of charitable causes, 
                    both locally and internationally. We actively back local charities 
                    through fundraising events and community initiatives, using home 
                    shows and sponsorships to raise vital funds. Our charity work is 
                    a testament to our belief that sport can unite communities and 
                    drive positive change, helping those in need within our own region.`}
        description2={`Most recently, we raised £5,000 to support Palestinian orphans, 
                    enabling them to undertake their pilgrimage to Saudi Arabia. This achievement, 
                    realised through the generosity of our sponsors and community members, 
                    underscores our global commitment. We remain dedicated to assisting the 
                    less fortunate at home and abroad, ensuring that our passion for boxing 
                    goes hand in hand with making a tangible difference in people’s lives.`}
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
