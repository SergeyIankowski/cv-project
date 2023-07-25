import {FC} from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";
import {SkillsMastery} from "@/models/SkillsMastery";

type ColorMap = {
  [key in keyof typeof SkillsMastery]: string;
};

const bgColorMap: ColorMap = {
  novice: "#00a651",
  advanced: "#8dc63f",
  competent: "#fff200",
  proficient: "#f7941d",
  expert: "#D21F3C",
};

const textColorMap: ColorMap = {
  novice: "#F0F0F0",
  advanced: "#404040",
  competent: "#5C5C5C",
  proficient: "#404040",
  expert: "#F0F0C0",
};

interface SkillCardProps {
  skill: SkillMastery;
  onDelete?: () => void;
}

export const SkillCard: FC<SkillCardProps> = ({skill, onDelete}) => {
  return (
    <Paper sx={{p: 1}}>
      <Grid container gap="20px" alignItems="center">
        <Chip
          color="default"
          label={skill.skill_name}
          sx={{fontSize: "18px"}}
        />
        <Chip
          label={skill.mastery}
          sx={{
            backgroundColor: bgColorMap[skill.mastery],
            color: textColorMap[skill.mastery],
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
