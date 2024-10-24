"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import svgs from "../_assets/svgs/Page";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  const text = {
    fontSize: {
      sm: "12px",
      md: "14px",
      lg: "18px",
    },
    fontWeight: "300",
    color: "#FFFFFF",
  };

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          padding: {
            xs: "20px 20px",
            sm: "20px 30px",
            md: "20px 50px",
            lg: "20px 100px",
          },
          backgroundColor: "#0D0D0D80",
        }}
      >
        <Box
          sx={{
            maxWidth: "1600px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {/* logo  */}
          <Box
            sx={{
              maxWidth: { xs: "90px", sm: "100px", md: "120px", lg: "184px" },
              width: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={svgs.Logo}
              alt="image"
            />
          </Box>
          {/* nav nevigation dexktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              color: "#FFFFFF",
              fontSize: "90px",
              fontWeight: "300",
              gap: { xs: "15px", md: "20px", lg: "40px" },
            }}
          >
            <Typography
              sx={{
                ...text,
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                ...text,
              }}
            >
              Education
            </Typography>
            <Typography
              sx={{
                ...text,
              }}
            >
              1-2-1 Coaching
            </Typography>
            <Typography
              sx={{
                ...text,
              }}
            >
              England Boxing
            </Typography>
          </Box>

          {/* button  */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              sx={{
                ...text,
                fontWeight: "400",
                color: "#0D0D0D",
                backgroundColor: "#FFFFFF",
                borderRadius: "0px",
                padding: {
                  xs: "10px 15px",
                  sm: "10px 15px",
                  lg: "15px 25px",
                },
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                "&:active": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Get In Touch
            </Button>
          </Box>

          {/* hamburger*/}
          <Box
            sx={{
              width: { xs: "25px", sm: "35px" },
              display: { xs: "block", md: "none" },
            }}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              src={svgs.Hamburger}
              alt="hamburger"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
