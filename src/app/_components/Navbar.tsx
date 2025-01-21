"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Typography, Box, Divider } from "@mui/material";

import Button from "./Button";
import svgs from "../_assets/svgs/index";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const router = useRouter();
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
    overflow: "hidden",
  };

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Navbar */}
      <div data-aos="fade-down" data-aos-duration="500">
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
              onClick={() => router.push("/")}
              sx={{
                maxWidth: { xs: "90px", sm: "100px", md: "120px", lg: "184px" },
                width: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
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
              <Typography
                onClick={() => router.push("/")}
                sx={{
                  ...text,
                  cursor: "pointer",
                  transition:
                    "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
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
                  ...text,
                  cursor: "pointer",
                  transition:
                    "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
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
                onClick={() => router.push("coaching")}
                sx={{
                  ...text,
                  cursor: "pointer",
                  transition:
                    "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
                  "&:hover": {
                    color: "#F63333",
                    textShadow: "1px 3px 4px #0D0D0D",
                    scale: "1.1",
                  },
                }}
              >
                1-2-1 Coaching
              </Typography>
              <Typography
                onClick={() => router.push("england-boxing")}
                sx={{
                  ...text,
                  cursor: "pointer",
                  transition:
                    "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
                  "&:hover": {
                    color: "#F63333",
                    textShadow: "1px 3px 4px #0D0D0D",
                    scale: "1.1",
                  },
                }}
              >
                OUR STORIES
              </Typography>
            </Box>

            {/* Contact Button */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => router.push("contact-us")}
                textStyles={{ fontSize: "1rem" }}
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
      </div>

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
          transition: "all .5s ease",
          zIndex: "10",
          textWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Image
            onClick={() => toggleDrawer(false)}
            style={{ width: "30px", height: "auto", paddingBottom: "30px" }}
            src={svgs.Cross}
            alt="Cross"
          />
          <Typography
            onClick={() => router.push("/")}
            sx={{ ...text, mb: 2, textAlign: "right" }}
          >
            Home
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography
            onClick={() => router.push("education")}
            sx={{ ...text, mb: 2, textAlign: "right" }}
          >
            Education
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography
            onClick={() => router.push("coaching")}
            sx={{ ...text, mb: 2, textAlign: "right" }}
          >
            1-2-1 Coaching
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography
            onClick={() => router.push("england-boxing")}
            sx={{ ...text, mb: 2, textAlign: "right" }}
          >
            OUR STORIES
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Button
            variant="contained"
            sx={{
              ...text,
              fontWeight: "400",
              color: "#0D0D0D",
              backgroundColor: "#FFFFFF",
              borderRadius: "0px",
              textWrap: "nowrap",
              padding: {
                xs: "6px 10px",
                sm: "8px 15px",
              },
              overflow: "hidden",
              float: "right",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              "&:active": {
                backgroundColor: "#e0e0e0",
              },
            }}
            onClick={() => router.push("contact-us")}
          >
            Get In Touch
          </Button>
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
}
