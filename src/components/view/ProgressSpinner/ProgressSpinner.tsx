import {FC} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const ProgressSpinner: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "50vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={70} />
    </Box>
  );
};
