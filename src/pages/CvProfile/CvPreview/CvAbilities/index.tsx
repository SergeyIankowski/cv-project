import {FC} from "react";
import Box from "@mui/material/Box";

import {TypographyDetails} from "@view/TypographyDetails";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

interface CvAbilitiesProps {
  skills: Cv["skills"];
  languages: Cv["languages"];
}

export const CvAbilities: FC<CvAbilitiesProps> = ({skills, languages}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        p: "10px",
      }}
    >
      <TypographyDetails
        variant="h5"
        fieldName="Skills"
        content={
          skills.map(skill => skill.skill_name) || EmptyFieldStrings.empty
        }
      />
      <TypographyDetails
        variant="h5"
        fieldName="Languages"
        content={
          languages.map(language => language.language_name) ||
          EmptyFieldStrings.empty
        }
      />
    </Box>
  );
};
