import {FC} from "react";
import Typography from "@mui/material/Typography";

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

export interface TypographyProps {
  text: string;
}

export const TypographyH6: FC<TypographyProps> = ({text}) => {
  return <Typography variant="h6">{text}</Typography>;
};

export const TypographyH3: FC<TypographyProps> = ({text}) => {
  return <Typography variant="h3">{text}</Typography>;
};
