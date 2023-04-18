import {FC} from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as Props,
} from "@mui/material";

export const Input: FC<Props> = ({children, sx, margin, id, label, type}) => {
  return (
    <MuiTextField
      size="small"
      required
      sx={sx}
      margin={margin}
      id={id}
      label={label}
      type={type}
    >
      {children}
    </MuiTextField>
  );
};
