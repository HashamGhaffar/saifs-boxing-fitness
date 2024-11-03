import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type FighterCardProps = {
  name: string;
  description: string;
  imageSrc: string | StaticImageData;
  isSelected?: boolean;
};

export function FighterCard({
  name,
  description,
  imageSrc,
  isSelected = false,
}: FighterCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: { lg: "scale(0.4)" },
      }}
      className="project"
    >
      <Box
        sx={{
          width: {
            xs: "200px",
            sm: "250px",
            md: "300px",
          },
          borderWidth: { xs: "1px", md: "1.7px" },
          borderStyle: "solid",
          borderColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            maxWidth: "300px",
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              filter: isSelected ? "grayscale(0%)" : "grayscale(100%)",
              outline: `${isSelected ? "2px" : "0px"} solid #FFFFFF`,
            }}
            src={imageSrc}
            alt={name}
          />
        </Box>

        <Box
          sx={{
            padding: {
              xs: "10px",
              md: "13px",
            },
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            backgroundColor: "#0D0D0DB2",
            borderTopWidth: { xs: "1px", md: "1.7px" },
            borderTopStyle: "solid",
            borderTopColor: "#ffffff",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "700",
              fontFamily: "lato, sans-serif",
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "400",
              fontFamily: "lato, sans-serif",
              fontSize: "12px",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
