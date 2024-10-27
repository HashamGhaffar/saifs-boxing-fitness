import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "../_assets/webp";

export default function Footer() {
  const textStyle = {
    fontWeight: "300",
    fontSize: "12px",
    color: "#FFFFFF",
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
            <Typography sx={{ ...textStyle }}>Home</Typography>
            <Typography sx={{ ...textStyle }}>Education</Typography>
            <Typography sx={{ ...textStyle }}>England Boxing</Typography>
            <Typography sx={{ ...textStyle }}>Coaching</Typography>
            <Typography sx={{ ...textStyle }}>Contact Us</Typography>
          </Box>
          <Box
            sx={{
              height: "auto",
              width: "140px",
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
              <Typography sx={{ ...textStyle }}>Facebook</Typography>
              <Typography sx={{ ...textStyle }}>Instagram</Typography>
              <Typography sx={{ ...textStyle }}>Twitter</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
