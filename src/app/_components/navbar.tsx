"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import svgs from "../_assets/svgs/index";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const text = {
    fontSize: {
      xs: "12px",
      sm: "12px",
      md: "14px",
      lg: "18px",
    },
    fontWeight: "300",
    color: "#FFFFFF",
  };

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
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
          {/* Logo */}
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

          {/* Desktop navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              color: "#FFFFFF",
              fontWeight: "300",
              gap: { xs: "15px", md: "20px", lg: "40px" },
            }}
          >
            <Typography sx={{ ...text }}>Home</Typography>
            <Typography sx={{ ...text }}>Education</Typography>
            <Typography sx={{ ...text }}>1-2-1 Coaching</Typography>
            <Typography sx={{ ...text }}>England Boxing</Typography>
          </Box>

          {/* Contact Button */}
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

          {/* Hamburger for mobile */}
          <Box
            sx={{
              width: { xs: "30px", sm: "35px" },
              display: { xs: "block", md: "none" },
            }}
            onClick={() => toggleDrawer(true)}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              src={svgs.Hamburger}
              alt="hamburger"
            />
          </Box>
        </Box>
      </Box>

      {/* Custom Drawer Navigation */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: isDrawerOpen ? { xs: "200px", sm: "300px" } : "0",
          backgroundColor: "#0D0D0D",
          color: "white",
          overflowX: "hidden",
          transition: "0.3s",
          paddingTop: "60px",
          zIndex: "10",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            Home
          </Typography>
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            Education
          </Typography>
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            1-2-1 Coaching
          </Typography>
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            England Boxing
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBlockEndt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                ...text,
                fontWeight: "400",
                color: "#0D0D0D",
                backgroundColor: "#FFFFFF",
                borderRadius: "0px",
                padding: {
                  xs: "6px 10px",
                  sm: "8px 15px",
                  // md: "12px 20px",
                  // lg: "15px 25px",
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
        </Box>
      </Box>

      {/* Backdrop (grey/blurred) */}
      {isDrawerOpen && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent grey
            zIndex: 1,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
}
