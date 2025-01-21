"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurStoriesSection() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "0px",
        color: "#2a2a2a",
        backgroundColor: "white",
        padding: {
          xs: "40px 20px 0 20px",
          sm: "60px 50px 0 50px ",
          md: "60px 50px 0 50px ",
          lg: "80px 100px 0 100px ",
        },
      }}
    >
      <OurStoriesCard onClick={() => router.push("/our-stories-detail")} />

      {/* <Pagination
        count={5}
        shape="rounded"
        sx={{
          paddingBottom: {
            xs: "40px",
            sm: "60px",
            md: "60px",
            lg: "80px",
          },
          marginTop: "20px",
          "& .MuiPaginationItem-root": {
            color: "#FFFFFF",
            margin: "0 2px",
          },
          "& .MuiPaginationItem-previousNext": {
            color: "#F63333",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#F63333",
            color: "#FFFFFF",
            borderRadius: "0px",
          },
        }}
      /> */}
    </Box>
  );
}

export function OurStoriesCard({
  onClick = () => {},
}: {
  onClick?: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        gap: { xs: "20px", md: "40px" },
        maxWidth: "1400px",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        paddingBottom: {
          xs: "40px",
          sm: "60px",
          md: "60px",
          lg: "80px",
        },
      }}
    >
      <Box
        data-aos="zoom-in-up"
        data-aos-duration="500"
        sx={{ height: { md: "380px" }, width: { sm: "500px", md: "400px" } }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            objectFit: "cover",
          }}
          src={webp.Bubbles}
          alt="Signature"
        />
      </Box>
      <Box
        data-aos="zoom-in-up"
        data-aos-duration="500"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: { xs: "800px", md: "400px", lg: "600px", xl: "800px" },
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#F63333",
              fontWeight: "400",
              fontFamily: "Anton, sans-serif",
              fontSize: {
                xs: "20px",
                sm: "24px",
                md: "30px",
                lg: "40px",
                xl: "48px",
              },
              textTransform: "uppercase",
            }}
          >
            From Rock Bottom to the Ring: How Boxing Changed My Life
          </Typography>
          <Typography
            sx={{
              padding: {
                xs: "10px 0",
                sm: "20px 0",
                md: "15px 0",
                lg: "20px 0",
              },
              fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
              fontWeight: "400",
              // color: "#ffffff",
            }}
          >
            {` At the young age of 11, my brother tragically passed away.
             After that, I did nothing with my life but go to school, eat,
              and play PlayStation. I hit rock bottom because I felt like
               I had no one left to guide me. Kids would laugh and make jokes,
                knowing it would make me angry, and I struggled to control my 
                emotions. This led to frequent fights and caused a lot of distress
                 for my mum. It all felt out of control because I lacked discipline.`}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
              fontWeight: "700",
              color: "#9C9C9C",
              textTransform: "uppercase",
            }}
          >
            october 15, 2024
          </Typography>
        </Box>

        <Box sx={{ marginTop: { xs: "15px", sm: "50px", md: "0" } }}>
          <Button
            onClick={onClick}
            variant="outlined"
            sx={{
              color: "#2a2a2a",
              borderColor: "#FFFFFF",
              borderRadius: "0px",
              border: "0px",
              borderBottom: "2px solid #2a2a2a",
              padding: "10px 0",
              fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
              transition:
                "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,  box-shadow 0.3s ease , padding  0.3s ease ",
              "&:hover": {
                backgroundColor: "#F63333",
                color: "#fff",
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px #F63333",
                padding: "10px",
                borderBottom: "2px solid #2a2a2a",
              },
            }}
          >
            read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
