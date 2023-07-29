import {FC} from "react";
import {useTranslation} from "react-i18next";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import {TypographyDetails} from "@view/TypographyDetails";
import {Project} from "@/graphql/interfaces/Project.interface";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

interface CvPreviewProjectProps {
  projectName: Project["name"];
  startDate: Project["start_date"];
  endDate: Project["end_date"];
  domain: Project["domain"];
  description: Project["description"];
}

export const CvPreviewProject: FC<CvPreviewProjectProps> = ({
  projectName,
  startDate,
  endDate,
  domain,
  description,
}) => {
  const {t} = useTranslation();
  return (
    <Paper elevation={5} sx={{m: "10px"}}>
      <Grid container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            p: "10px 10px 0",
            width: "45%",
          }}
        >
          <TypographyDetails
            variant="h5"
            fieldName={t("projectName")}
            content={projectName || EmptyFieldStrings.empty}
          />
          <Divider flexItem />
          <TypographyDetails
            variant="h5"
            fieldName={t("startDate")}
            content={startDate || EmptyFieldStrings.empty}
          />
          <Divider flexItem />
          <TypographyDetails
            variant="h5"
            fieldName={t("endDate")}
            content={endDate || EmptyFieldStrings.tillNow}
          />
          <Divider flexItem />
          <TypographyDetails
            variant="h5"
            fieldName={t("domain")}
            content={domain || EmptyFieldStrings.empty}
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{p: "10px"}}>
          <TypographyDetails
            variant="h5"
            fieldName={t("description")}
            content={description || EmptyFieldStrings.empty}
          />
        </Box>
      </Grid>
    </Paper>
  );
};
