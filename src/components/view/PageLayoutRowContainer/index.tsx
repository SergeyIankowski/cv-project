import {FC, ReactNode} from "react";
import Grid from "@mui/material/Grid";

interface PageLayoutRowContainerProps {
  children: ReactNode;
}

export const PageLayoutRowContainer: FC<PageLayoutRowContainerProps> = ({
  children,
}) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{width: "100%"}}
    >
      {children}
    </Grid>
  );
};
