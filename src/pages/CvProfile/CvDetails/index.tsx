import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {TypographyDetails} from "@view/TypographyDetails";
import Grid from "@mui/material/Grid";
import {UpdateCvModal} from "@/pages/Profile/UpdateCvModal";
import Box from "@mui/material/Box";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

export const CvDetails: FC = () => {
  const {id} = useParams();
  const {loadCv, cvData} = useCvQuery();
  const {t} = useTranslation();

  useEffect(() => {
    loadCv(id!);
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" gap="10px">
          <TypographyDetails
            variant="h6"
            fieldName={t("name")}
            content={cvData.name || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName={t("description")}
            content={cvData.description || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName={t("user")}
            content={cvData.user?.profile?.full_name || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName={t("position")}
            content={cvData.user?.position_name || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName={t("skills")}
            content={
              cvData.skills.map(skill => skill.skill_name) ||
              EmptyFieldStrings.empty
            }
          />
          <TypographyDetails
            variant="h6"
            fieldName={t("languages")}
            content={
              cvData.languages.map(language => language.language_name) ||
              EmptyFieldStrings.empty
            }
          />
          <Box>
            <UpdateCvModal cvId={id!} userId={cvData?.user?.id} />
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};
