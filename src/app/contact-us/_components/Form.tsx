import { Box, Typography, CircularProgress } from "@mui/material";
import CustomTextField from "../../_components/CustomTextField";
import Button from "../../_components/Button";
import Navbar from "@/app/_components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { showError, showSuccess } from "@/app/_utils/toast";
import axios from "axios";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/contactus", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);

      if (response?.status === 200) {
        showSuccess("Email sent successfully!");
        reset();
      } else {
        showError(`Failed to send email: ${response?.data?.error}`);
        reset();
      }
    } catch (error) {
      console.error(error, "error");
      showError(`Failed to send email`);
      reset();
    }
  };

  const cardHeading = {
    color: "#FFFFFF",
    fontWeight: "700",
    textTransform: "uppercase",
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
              Contact Us
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
                }}
              >
                <Box>
                  <Typography sx={{ ...cardHeading }}>Location</Typography>
                  <Typography sx={{ ...cardText }}>
                    1-5 Canklow Rd, Rotherham S60 2JB, United Kingdom
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...cardHeading }}>Phone</Typography>
                  <Typography sx={{ ...cardText }}>+447860606986</Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...cardHeading }}>Email</Typography>
                  <Typography sx={{ ...cardText }}>
                    info@saifsboxing.com
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#0D0D0DB2",
                  padding: { xs: "20px", sm: "20px 30px" },
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "450px",
                  gap: "20px",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      marginBottom: "20px",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Controller
                      name="name"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          type="text"
                          placeholder="Name"
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email format",
                        },
                      }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          type="email"
                          placeholder="Email"
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      marginBottom: "20px",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid phone number",
                        },
                      }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          type="number"
                          placeholder="Phone"
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                        />
                      )}
                    />
                    <Controller
                      name="subject"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Subject is required" }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          type="text"
                          placeholder="Subject"
                          error={!!errors.subject}
                          helperText={errors.subject?.message}
                        />
                      )}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "20px" }}>
                    <Controller
                      name="message"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <CustomTextField
                          {...field}
                          type="text"
                          placeholder="Message"
                          multiline
                          error={!!errors.message}
                          helperText={errors.message?.message}
                        />
                      )}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "200px" },
                      position: "relative",
                    }}
                  >
                    <Button
                      textStyles={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          lg: "18px",
                        },
                      }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <CircularProgress size={24} sx={{ color: "#F63333" }} />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
