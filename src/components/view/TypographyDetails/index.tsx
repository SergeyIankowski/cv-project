import {FC} from "react";
import Typography from "@mui/material/Typography";
import {colors} from "@view/MuiPagesStyles";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
// import Divider from "@mui/material/Divider";

interface TypographyDetailsProps {
  fieldName: string;
  content: string | undefined | string[];
}
export const TypographyDetails: FC<TypographyDetailsProps> = ({
  fieldName,
  content,
}) => {
  return (
    <Grid container gap="10px" alignItems="baseline">
      <Typography
        variant="h6"
        sx={{
          color: colors.authLinksColor,
        }}
      >
        {`${fieldName}:`}
      </Typography>
      {Array.isArray(content) ? (
        content.map(item => <Chip sx={{p: 1}} key={item} label={item} />)
      ) : (
        <Typography sx={{color: "black"}}>{content}</Typography>
      )}
    </Grid>
  );
};
