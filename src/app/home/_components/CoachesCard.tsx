import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";

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
  const [showFullText, setShowFullText] = useState(false);
  const [height, setHeight] = useState("80px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      if (showFullText) {
        setHeight(`${content.scrollHeight}px`);
      } else {
        setHeight("80px");
      }
    }
  }, [showFullText]);

  const handleToggle = () => {
    if (showFullText) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
      requestAnimationFrame(() => setShowFullText(false));
    } else {
      setShowFullText(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xl: "50px" },
        minHeight: {
          xs: "450px",
          sm: "350px",
          lg: "400px",
          xl: "450px",
        },
      }}
    >
      <Grid
        sx={{
          backgroundImage: `${backgroundImage}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: {
            xs: "20px 30px 0 20px",
            sm: "30px 30px 0 30px",
            lg: "30px 50px 0 30px",
          },
        }}
        justifyContent="space-between"
        container
      >
        <Grid
          sx={{
            height: "100%",
            display: "flex",
            alignItems: { xs: "center" },
            md: "none",
          }}
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={7.5}
        >
          {/* Coach details */}
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
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                height: {
                  xs: "250px",
                  sm: "280px",
                  lg: "290px",
                  xl: "400px",
                },
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
            <Box
              ref={contentRef}
              sx={{
                height,
                transition: "height 0.5s ease",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#ffffff",
                  fontSize: { xs: "12px", md: "14px", xl: "18px" },
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: showFullText ? "unset" : "4",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textShadow: "0px 0px 6px #000",
                }}
              >
                {description.split("<br>").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
            <Button
              onClick={handleToggle}
              sx={{
                mt: 2,
                color: "#ffffff",
              }}
            >
              {showFullText ? "Read Less" : "Read More"}
            </Button>
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
          {/* Coach image */}
          <Box
            sx={{
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
  );
}

export default CoachesCard;
