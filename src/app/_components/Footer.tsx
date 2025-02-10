import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "../_assets/webp";
import { useRouter } from "next/navigation";
import svgs from "../_assets/svgs";

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
          {/* footer logo  */}
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
              Community
            </Typography>
            <Typography
              onClick={() => router.push("/our-stories")}
              sx={{
                ...textStyle,
                "&:hover": {
                  color: "#F63333",
                  textShadow: "1px 3px 4px #0D0D0D",
                  scale: "1.1",
                },
              }}
            >
              Our Stories
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
            <Typography sx={{ ...headingStyle }}>contact us</Typography>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={svgs.Phone} alt="Phone" />
              <Typography sx={{ ...textStyle }}>07860606986</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={svgs.Email} alt="Email" />
              <Typography sx={{ ...textStyle }}>saifsboxinggym@gmail.com</Typography>
            </Box>
            {/* location   */}
            <Box
              sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
            >
              <Image src={svgs.Location} alt="location" />
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

      <Box
        sx={{
          padding: { xs: "20px", md: "25px" },
          textAlign: "center",
          backgroundColor: "#FFFFFF10",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "12px",
            fontFamily: '"Roboto", sans-serif',
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            "&:hover": {
              "& span:last-child": {
                color: "#F63333",
                textShadow: "1px 2px 3px #FFFFFF",
              },
            },
          }}
        >
          <span>© {2025} All Rights Reserved</span>
          <span
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              marginLeft: "8px",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Powered by QashNova
          </span>
        </Typography>
      </Box>
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
    textWrap: "nowrap",
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
    <Box
      sx={{
        padding: "30px 40px",
        display: { xs: "block", sm: "none" },
        backgroundImage: "url(bgFooter.webp)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0D0D0D",
      }}
    >
      <Box sx={{ paddingBottom: "30px" }}>
        <Typography sx={{ ...headingStyle }}>Quick Links</Typography>
        <Box sx={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}>
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "center",
                  paddingBottom: "15px",
                }}
              >
                <Typography sx={{ ...textStyle, marginLeft: "-22px" }}>
                  Home
                </Typography>
              </td>
              <td
                style={{
                  textAlign: "center",
                  paddingBottom: "15px",
                }}
              >
                <Typography sx={{ ...textStyle }}>1-2-1 Coaching</Typography>
              </td>
              <td
                style={{
                  textAlign: "center",
                  paddingBottom: "15px",
                }}
              >
                <Typography sx={{ ...textStyle }}>Contact US</Typography>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                <Typography sx={{ ...textStyle }}>Community</Typography>
              </td>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                <Typography sx={{ ...textStyle }}>England Boxing</Typography>
              </td>
              <td style={{ padding: 0 }} />
            </tr>
          </table>
        </Box>
      </Box>
      <Box sx={{ paddingBottom: "30px" }}>
        <Typography sx={{ ...headingStyle }}>contact us</Typography>
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
                paddingBottom: "10px",
              }}
            >
              <Image
                style={{ width: "20px", height: "20px", objectFit: "contain" }}
                src={svgs.Phone}
                alt="Phone"
              />
              <Typography sx={{ ...textStyle }}>07860606986</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "flex-start",
                paddingBottom: "10px",
              }}
            >
              <Image
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
                src={svgs.Email}
                alt="Email"
              />
              <Typography sx={{ ...textStyle, fontSize: "14px" }}>
                saifsboxinggym@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Image
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
                src={svgs.Location}
                alt="Location"
              />
              <Typography
                sx={{
                  ...textStyle,
                  maxWidth: "200px",
                  textWrap: "wrap",
                }}
              >
                1-5 Canklow Rd, Rotherham S60 2JB, United Kingdom
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
