import React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
  type?: string;
  placeholder?: string;
  // placeholder?: string;
  multiline?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomTextField({
  type = "text",
  placeholder = "Outlined",
  multiline = false,
  value,
  defaultValue,
  onChange,
  ...props
}: CustomTextFieldProps) {
  return (
    <TextField
      type={type === "message" ? "text" : type}
      placeholder={placeholder}
      variant="outlined"
      multiline={multiline || type === "message"}
      rows={type === "message" || multiline ? 4 : 1}
      value={value} // Controls the input
      defaultValue={defaultValue} // Provides an initial value if needed
      onChange={onChange} // Allows for external state control
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
