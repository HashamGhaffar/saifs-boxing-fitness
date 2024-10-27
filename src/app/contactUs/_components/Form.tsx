import { Box, Typography } from "@mui/material";
import CustomTextField from "../../_components/CustomTextField";
import Button from "../../_components/Button";
import TextField from "@mui/material/TextField";

export default function ContactUsForm() {
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
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
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
            }}
          >
            <Box
              sx={{
                backgroundColor: "#0D0D0DB2",
                padding: "40px 20px",
                height: "auto",
                minWidth: "550px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // minHeight: "450px",
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
              sx={{
                backgroundColor: "#0D0D0DB2",
                padding: "20px 30px",
                height: "100%",
                minWidth: "550px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "450px",
                gap: "20px",
              }}
            >
              <Box sx={{ display: "flex", gap: "20px" }}>
                <CustomTextField type="text" label="Name" />
                <CustomTextField type="email" label="Email" />
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <CustomTextField type="number" label="Phone" />
                <CustomTextField type="text" label="subject" />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  type="text"
                  label="Message"
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
                      color: "#FFFFFF",
                      opacity: 1,
                      fontSize: "18px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "200px" }}>
                <Button>Submit</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
