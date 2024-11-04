import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "../_assets/webp";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import svgs from "../_assets/svgs";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const router = useRouter();

  const textStyle = {
    fontWeight: "300",
    fontSize: "12px",
    color: "#FFFFFF",
    cursor: "pointer",
    transition:
      "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
  };
  const headingStyle = {
    fontWeight: "400",
    color: "#F63333",
    textTransform: "uppercase",
    fontFamily: "Anton, sans-serif",
    fontSize: { xs: "24px", sm: "26px", lg: "32px" },
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: {
            xs: "20px 20px",
            sm: "30px 50px",
            lg: "40px 100px",
          },
          backgroundColor: "#0D0D0D",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
        }}
      >
        <Box
          data-aos="zoom-out"
          data-aos-duration="1000"
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between" },
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: { xs: "30px", sm: "60px" },
            flexDirection: "row",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          <Box
            onClick={() => router.push("/")}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: { xs: "flex-start" },
            }}
          >
            <Typography sx={{ ...headingStyle }}>quick links</Typography>
            <Typography
              onClick={() => router.push("/")}
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
              onClick={() => router.push("england-boxing")}
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
              onClick={() => router.push("coaching")}
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
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: { xs: "flex-start" },
            }}
          >
            <Typography sx={{ ...headingStyle }}>quick links</Typography>
            <Typography
              onClick={() => router.push("/")}
              sx={{
                ...textStyle,
                maxWidth: "180px",
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              1-5 Canklow Rd, Rotherham S60 2JB, United Kingdom
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: { xs: "flex-start" },
            }}
          >
            <Typography sx={{ ...headingStyle }}>contact us</Typography>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={svgs.Phone} alt="Phone" />
              <Typography sx={{ ...textStyle }}>+447860606986</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={svgs.Email} alt="Email" />
              <Typography sx={{ ...textStyle }}>+info@sabirs.com</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: { xs: "flex-start" },
            }}
          >
            <Typography sx={{ ...headingStyle }}>social links</Typography>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={svgs.FaceBook} alt="Facebook" />
              <Typography sx={{ ...textStyle }}>Facebook</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={svgs.Instagram} alt="Instagram" />
              <Typography sx={{ ...textStyle }}>Instagram</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <MobileFooter />
    </>
  );
}

export function MobileFooter() {
  const textStyle = {
    fontWeight: "400",
    fontSize: "12px",
    color: "#FFFFFF",
    cursor: "pointer",
    transition:
      "color 0.4s ease-in-out, text-shadow 0.8s ease-in , scale .3s ease-in-out",
  };
  const headingStyle = {
    fontWeight: "700",
    fontSize: "16px",
    color: "#F63333",
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: "15px",
  };
  return (
    <Box sx={{ padding: "30px 40px", display: { xs: "block", sm: "none" } }}>
      <Box sx={{ paddingBottom: "30px" }}>
        <Typography sx={{ ...headingStyle }}>quick links</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              gap: "60px",
              rowGap: "15px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              maxWidth: "300px",
            }}
          >
            <Typography style={{ ...textStyle }}>Home</Typography>
            <Typography style={{ ...textStyle }}>1-2-1 Coaching</Typography>
            <Typography style={{ ...textStyle }}>Contact US</Typography>
            <Typography style={{ ...textStyle }}>Education</Typography>
            <Typography style={{ ...textStyle }}>England Boxing</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingBottom: "30px" }}>
        <Typography sx={{ ...headingStyle }}>Address</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "flex-start",
                paddingBottom: "8px",
              }}
            >
              <Image
                style={{ width: "20px", height: "20px", objectFit: "contain" }}
                src={svgs.Phone}
                alt="Phone"
              />
              <Typography style={{ ...textStyle }}>+447860606986</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "flex-start",
              }}
            >
              <Image
                style={{ width: "20px", height: "20px", objectFit: "contain" }}
                src={svgs.Email}
                alt="Email"
              />
              <Typography style={{ ...textStyle, fontSize: "14px" }}>
                info@sabirs.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "24px" }}>
        <Image
          style={{ height: "40px", width: "40px", objectFit: "contain" }}
          src={svgs.Instagram}
          alt="Instagram"
        />
        <Image
          style={{ height: "40px", width: "40px", objectFit: "contain" }}
          src={svgs.FaceBook}
          alt="FaceBook"
        />
      </Box>
    </Box>
  );
}
