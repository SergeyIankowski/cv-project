import {FC} from "react";
import {Button as MuiButton, ButtonProps as Props} from "@mui/material";

export const Button: FC<Props> = ({children, variant, color, type, sx}) => {
  return (
    <MuiButton variant={variant} color={color} sx={sx} type={type}>
      {children}
    </MuiButton>
  );
};
