import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  textStyles?: object;
}

const Button: React.FC<CustomButtonProps> = ({
  textStyles,
  children,
  ...props
}) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        ...textStyles,
        width: "100%",
        fontWeight: "400",
        color: "#0D0D0D",
        backgroundColor: "#FFFFFF",
        borderRadius: "0px",
        textTransform: "capitalize",
        padding: {
          xs: "10px 15px",
          sm: "10px 15px",
          lg: "15px 25px",
        },
        transition:
          "background-color 0.3s ease-in-out, color 0.15s ease-in, box-shadow 0.1s ease-in-out",
        textWrap: "nowrap",
        "&:hover": {
          backgroundColor: "#F63333",
          color: "#FFFFFF",
          boxShadow: "0px 0px 8px #F63333",
        },
        "&:active": {
          backgroundColor: "#e0e0e0",
        },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
