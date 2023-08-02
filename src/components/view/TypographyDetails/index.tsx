import {FC} from "react";
import Typography, {TypographyProps} from "@mui/material/Typography";
import {colors} from "@view/MuiPagesStyles";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

interface TypographyDetailsProps {
  fieldName: string;
  content: string | undefined | string[];
}

type GeneralProps = TypographyDetailsProps & Pick<TypographyProps, "variant">;
export const TypographyDetails: FC<GeneralProps> = ({
  fieldName,
  content,
  variant,
}) => {
  return (
    <Grid container gap="10px" alignItems="center">
      <Typography
        variant={variant}
        sx={{
          color: colors.headerItemsColor,
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
