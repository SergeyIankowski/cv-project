import Typography from "@mui/material/Typography";
import {FC} from "react";
import {colors} from "@view/MuiPagesStyles";
import Grid from "@mui/material/Grid";

interface TypographySignUpProps {
  text: string;
  underline: boolean;
  onClick?: () => void;
}

export const TypographySignUpHeader: FC<TypographySignUpProps> = ({
  text,
  underline,
  onClick,
}) => {
  return underline ? (
    <Typography sx={{borderBottom: "2px #eeeef0 solid"}} variant="h6">
      {text}
    </Typography>
  ) : (
    <Typography onClick={onClick} variant="h6">
      {text}
    </Typography>
  );
};

interface TypographyProps {
  text: string;
}

export const TypographyH6: FC<TypographyProps> = ({text}) => {
  return <Typography variant="h6">{text}</Typography>;
};

export const TypographyH3: FC<TypographyProps> = ({text}) => {
  return <Typography variant="h3">{text}</Typography>;
};

interface TypographyProjectDetailsProps extends TypographyProps {
  fieldName: string;
}
export const TypographyProjectDetails: FC<TypographyProjectDetailsProps> = ({
  fieldName,
  text,
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
      <Typography sx={{color: "black"}}>{text}</Typography>
    </Grid>
  );
};
