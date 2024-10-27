import React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
  type?: string;
  label?: string;
}

export default function CustomTextField({
  type = "text",
  label = "Outlined",
  ...props
}: CustomTextFieldProps) {
  return (
    <TextField
      type={type}
      label={label}
      variant="outlined"
      multiline={type === "message"}
      rows={type === "message" ? 4 : 1}
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
      {...props}
    />
  );
}
