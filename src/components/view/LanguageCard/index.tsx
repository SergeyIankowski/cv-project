import {FC} from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {LanguageProficiency} from "@/graphql/interfaces/LanguageProficiency.interface";
import {LanguagesProficiency} from "@/models/LanguagesProficiency";

type ColorMap = {
  [key in keyof typeof LanguagesProficiency]: string;
};

const bgColorMap: ColorMap = {
  a1: "#ebdc78",
  a2: "#8be04e",
  b1: "#00b7c7",
  b2: "#0d88e6",
  c1: "#fd7f6f",
  c2: "#7c1158",
  native: "#D21F3C",
};

const textColorMap: ColorMap = {
  a1: "#ffffff",
  a2: "#ffffff",
  b1: "#ffffff",
  b2: "#ffffff",
  c1: "#ffffff",
  c2: "#ffffff",
  native: "#ffffff",
};

interface LanguageCardProps {
  language: LanguageProficiency;
  onDelete?: () => void;
}

export const LanguageCard: FC<LanguageCardProps> = ({language, onDelete}) => {
  return (
    <Paper sx={{p: 1}}>
      <Grid container gap="20px" alignItems="center">
        <Chip
          color="default"
          label={language.language_name}
          sx={{fontSize: "18px"}}
        />
        <Chip
          label={language.proficiency}
          sx={{
            backgroundColor: bgColorMap[language.proficiency],
            color: textColorMap[language.proficiency],
            fontSize: "18px",
          }}
        />
        <IconButton onClick={onDelete}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Paper>
  );
};
