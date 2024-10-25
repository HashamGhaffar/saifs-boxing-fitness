import webp from "@/app/_assets/webp";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Facilities() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(bgFacilities.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
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
              paddingBottom: {
                xs: "40px",
                sm: "60px",
                md: "60px",
                lg: "80px",
              },
            }}
          >
            our facilities
          </Typography>
          {/* grid images */}
          <Grid container spacing={1.25}>
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Box
                  sx={{
                    display: { xs: "block", sm: "none", md: "block" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F1}
                    alt="facility1"
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "none" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F2}
                    alt="facility2"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={2}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Box
                  sx={{
                    display: { xs: "block", sm: "none", md: "block" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F2}
                    alt="facility2"
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "none" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F1}
                    alt="facility1"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={webp.F3}
                  alt="facility3"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={webp.F4}
                  alt="facility4"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={webp.F5}
                  alt="facility5"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={webp.F6}
                  alt="facility6"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={2}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Box
                  sx={{
                    display: { xs: "block", sm: "none", md: "block" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F7}
                    alt="facility7"
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "none" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F8}
                    alt="facility8"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ height: { sm: "100%" }, width: "auto" }}>
                <Box
                  sx={{
                    display: { xs: "block", sm: "none", md: "block" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F8}
                    alt="facility8"
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "none" },
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={webp.F7}
                    alt="facility7"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
