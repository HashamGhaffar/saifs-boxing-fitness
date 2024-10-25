import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";

export default function Coatches() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgCoaches.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
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
          <Box>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "30px 80px 0 30px",
                backgroundImage: "url(bgCoachJames.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                gap: { xs: "", sm: "", md: "", lg: "", xl: "50px" },
              }}
            >
              {/* coach details  */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  maxWidth: "760px",
                  paddingBottom: { lg: "45px" },
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
                    fontSize: { xs: "16px", md: "18px" },
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
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {`With a background in both amateur and professional boxing, he
                  brings a wealth of knowledge and a hands-on approach to every
                  session. His focus is not just on perfecting technique, but
                  also on building mental toughness, confidence, and discipline
                  qualities.`}
                </Typography>
              </Box>
              {/* coach image  */}
              <Box
                sx={{
                  height: "auto",
                  maxWidth: {
                    xs: "300px",
                    sm: "300px",
                    lg: "300px",
                    xl: "450px",
                  },
                  width: "100%",
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  src={webp.CoachJames}
                  alt="CoachJames"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
