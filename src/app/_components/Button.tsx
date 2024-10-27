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
        fontWeight: "400",
        color: "#0D0D0D",
        backgroundColor: "#FFFFFF",
        borderRadius: "0px",
        padding: {
          xs: "10px 15px",
          sm: "10px 15px",
          lg: "15px 25px",
        },
        transition:
          "background-color 0.8s ease-in-out, color 0.4s ease-in, box-shadow 0.4s ease-in-out",
        textWrap: "nowrap",
        "&:hover": {
          backgroundColor: "#0D0D0D",
          color: "#FFFFFF",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
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