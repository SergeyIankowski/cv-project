import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
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

  useEffect(() => {
    loadCv(id!);
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" gap="10px">
          <TypographyDetails
            variant="h6"
            fieldName="Name"
            content={cvData.name || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName="Description"
            content={cvData.description || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName="User"
            content={cvData.user?.profile?.full_name || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName="position"
            content={cvData.user?.position_name || EmptyFieldStrings.empty}
          />
          <TypographyDetails
            variant="h6"
            fieldName="Skills"
            content={
              cvData.skills.map(skill => skill.skill_name) ||
              EmptyFieldStrings.empty
            }
          />
          <TypographyDetails
            variant="h6"
            fieldName="Languages"
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
