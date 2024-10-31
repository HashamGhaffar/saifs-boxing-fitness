import React from "react";
import Image, { StaticImageData } from "next/image";

import { Box, Grid, Typography } from "@mui/material";
function CoachesCard({
  name,
  image,
  backgroundImage,
  description,
}: {
  name: string;
  image: StaticImageData;
  backgroundImage: string;
  description: string;
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: {
            xs: "20px 30px 0 20px",
            sm: "30px 30px 0 30px",
            lg: "30px 50px 0 30px",
          },
          backgroundImage: `${backgroundImage}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          gap: { xs: "", sm: "", md: "", lg: "", xl: "50px" },
        }}
      >
        <Grid
          // alignItems="flex-end"
          justifyContent="space-between"
          container
        >
          <Grid item xs={12} md={7.5}>
            {/* coach details  */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "10px", xl: "20px" },
                paddingBottom: { xs: "10px", sm: "20px", xl: "40px" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#ffffff",
                  fontSize: {
                    xs: "22px",
                    sm: "24px",
                    lg: "26px",
                  },
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#ffffff",
                  fontSize: { xs: "12px", md: "14px", xl: "18px" },
                }}
              >
                {/* {description} */}
                {description.split("<br>").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              position: "relative",
              display: { xs: "none", md: "flex" },
              alignItems: "flex-end",
            }}
            item
            xs={0}
            md={4}
            lg={4}
            xl={4}
          >
            {/* coach image  */}
            <Box
              sx={{
                // height: "100%",
                display: { xs: "none", md: "flex" },
                alignItems: "flex-end",
                height: {
                  xs: "auto",
                  sm: "280px",
                  lg: "290px",
                  xl: "400px",
                },
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={image}
                alt="CoachJames"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CoachesCard;
