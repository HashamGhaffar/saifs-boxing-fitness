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
        transform: { lg: "scale(0.7)" },
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
          borderColor: isSelected ? "#FFFFFF" : "transparent",
        }}
      >
        <Box
          sx={{
            maxWidth: "300px",
            maxHeight: {
              xs: "264px",
              sm: "330px",
              md: "330px",
            },
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              filter: isSelected ? "grayscale(0%)" : "grayscale(100%)",
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
              fontSize: { xs: "16px", md: "18px", lg: "20px", xl: "22px" },
              // ELIPESIS
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "400",
              fontFamily: "lato, sans-serif",
              fontSize: { xs: "14px", xl: "16px" },
              // elipesis
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
