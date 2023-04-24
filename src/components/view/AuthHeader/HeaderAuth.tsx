import {FC} from "react";
import {Box, BoxProps as Props} from "@mui/material";
import {HeaderStyle} from "@view/MuiPagesStyles";

export const HeaderAuth: FC<Props> = ({children}) => {
  return <Box sx={HeaderStyle}>{children}</Box>;
};
