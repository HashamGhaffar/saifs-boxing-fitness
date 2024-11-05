import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface ImageBoxProps {
  src: StaticImageData;
  isSelected?: boolean;
  onClick?: () => void;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  src,
  isSelected = false,
  onClick = () => {},
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        height: "auto",
        width: { xs: "55px", sm: "60px", lg: "85px" },
        outline: `${isSelected ? "2px" : "0px"} solid #FFFFFF`,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          filter: isSelected ? "grayscale(0%)" : "grayscale(100%)",
        }}
        src={src}
        alt="coach image"
      />
    </Box>
  );
};

export default ImageBox;
