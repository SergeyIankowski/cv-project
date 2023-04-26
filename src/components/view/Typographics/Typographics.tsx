import Typography from "@mui/material/Typography";
import {FC} from "react";

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

interface TypographyHeadProps {
  text: string;
}

export const TypographyH6: FC<TypographyHeadProps> = ({text}) => {
  return <Typography variant="h6">{text}</Typography>;
};

export const TypographyH3: FC<TypographyHeadProps> = ({text}) => {
  return <Typography variant="h3">{text}</Typography>;
};
