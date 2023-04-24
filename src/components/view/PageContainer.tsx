import {FC} from "react";
import {Container, ContainerProps as Props} from "@mui/material";
import {PageStyle} from "../../pages/MuiPagesStyles";

export const PageContainer: FC<Props> = ({children}) => {
  return <Container sx={PageStyle}>{children}</Container>;
};
