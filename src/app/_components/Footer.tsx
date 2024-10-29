import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "../_assets/webp";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const textStyle = {
    fontWeight: "300",
    fontSize: "12px",
    color: "#FFFFFF",
    cursor: "pointer",
    transition:
      "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: {
            xs: "20px 20px",
            sm: "20px 50px",
            lg: "20px 100px",
          },
          backgroundColor: "#0D0D0D",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: "30px", sm: "60px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: { xs: "flex-start", sm: "flex-end" },
            }}
          >
            <Typography
              sx={{
                ...textStyle,
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              Home
            </Typography>
            <Typography
              onClick={() => router.push("education")}
              sx={{
                ...textStyle,
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              Education
            </Typography>
            <Typography
              sx={{
                ...textStyle,
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              England Boxing
            </Typography>
            <Typography
              sx={{
                ...textStyle,
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              Coaching
            </Typography>
            <Typography
              onClick={() => router.push("contact-us")}
              sx={{
                ...textStyle,
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              Contact Us
            </Typography>
          </Box>
          <Box
            sx={{
              height: "auto",
              width: "140px",
              cursor: "pointer",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={webp.FooterLogo}
              alt="FooterLogo"
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{
                  ...textStyle,
                  "&:hover": {
                    color: "#F63333",
                    textShadow: "1px 3px 4px #0D0D0D",
                    scale: "1.1",
                  },
                }}
              >
                Facebook
              </Typography>
              <Typography
                sx={{
                  ...textStyle,
                  "&:hover": {
                    color: "#F63333",
                    textShadow: "1px 3px 4px #0D0D0D",
                    scale: "1.1",
                  },
                }}
              >
                Instagram
              </Typography>
              <Typography
                sx={{
                  ...textStyle,
                  "&:hover": {
                    color: "#F63333",
                    textShadow: "1px 3px 4px #0D0D0D",
                    scale: "1.1",
                  },
                }}
              >
                Twitter
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
