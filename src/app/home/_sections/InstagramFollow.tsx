import { Box, Typography } from "@mui/material";
// import Image from "next/image";
// import webp from "@/app/_assets/webp";

export default function InstagramFollow() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgSponsors.webp)",
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
          {" "}
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
            }}
          >
            follow on instagram
          </Typography>
        </Box>
      </Box>
    </>
  );
}
