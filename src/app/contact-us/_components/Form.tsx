import { Box, Typography } from "@mui/material";
import CustomTextField from "../../_components/CustomTextField";
import Button from "../../_components/Button";
import TextField from "@mui/material/TextField";
import Navbar from "@/app/_components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactUsForm() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
  const cardHeading = {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: {
      xs: "18px",
      sm: "20px",
      lg: "26px",
    },
  };

  const cardText = {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: {
      xs: "14px",
      sm: "16px",
      lg: "18px",
    },
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgContactUs.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: {
              xs: "40px 20px 40px",
              sm: "60px 50px 60px",
              md: "60px 50px 60px",
              lg: "80px 100px 80px",
              minHeight: "100vh",
            },
          }}
        >
          <Box sx={{ maxWidth: "1600px", width: "100%" }}>
            {/* heading  */}
            <Typography
              data-aos="zoom-in"
              data-aos-duration="1000"
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
                textAlign: "left",
                width: "100%",
              }}
            >
              contact us
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                gap: { xs: "20px", md: "30px", lg: "40px" },
                flexDirection: { xs: "column-reverse", md: "row" },
                paddingTop: { xs: "15px", sm: "30px", lg: "50px" },
              }}
            >
              <Box
                data-aos="fade-right"
                data-aos-duration="1000"
                sx={{
                  backgroundColor: "#0D0D0DB2",
                  padding: { xs: "20px", sm: "20px 30px", md: "40px 20px" },
                  height: "auto",
                  minWidth: { xl: "550px" },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: { xs: "300px", sm: "400px", md: "auto" },
                  border: {
                    sx: "1px solid #ffffff",
                    md: "2px solid #ffffff",
                    lg: "3px solid #ffffff",
                  },
                }}
              >
                <Box>
                  <Typography sx={{ ...cardHeading }}>location</Typography>
                  <Typography sx={{ ...cardText }}>
                    1-5 Canklow Rd, Rotherham S60 2JB, United Kingdom
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...cardHeading }}>Phone</Typography>
                  <Typography sx={{ ...cardText }}>+447860606986</Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...cardHeading }}>email</Typography>
                  <Typography sx={{ ...cardText }}>
                    info@saifsboxing.com
                  </Typography>
                </Box>
              </Box>
              <Box
                data-aos="fade-left"
                data-aos-duration="1000"
                sx={{
                  backgroundColor: "#0D0D0DB2",
                  padding: { xs: "20px", sm: "20px 30px" },
                  height: "100%",
                  minWidth: { md: "500px" },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "450px",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <CustomTextField type="text" placeholder="Name" />
                  <CustomTextField type="email" placeholder="Email" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <CustomTextField type="number" placeholder="Phone" />
                  <CustomTextField type="text" placeholder="Subject" />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    type="text"
                    placeholder="Message"
                    variant="outlined"
                    multiline
                    rows={6}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0px",
                        fontSize: "18px",
                        color: "#FFFFFF",
                        "& fieldset": {
                          borderColor: "#FFFFFF",
                        },
                        "&:hover fieldset": {
                          borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FFFFFF",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "18px",
                        color: "#FFFFFF",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#FFFFFF",
                      },
                      "& .MuiInputBase-input": {
                        color: "#FFFFFF",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#FFFFFF66",
                        opacity: 1,
                        fontSize: "18px",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ width: "200px" }}>
                  <Button
                    textStyles={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        lg: "18px",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
