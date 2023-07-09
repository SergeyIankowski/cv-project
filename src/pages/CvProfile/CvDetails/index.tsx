import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {TypographyDetails} from "@view/TypographyDetails";
import Grid from "@mui/material/Grid";
import {UpdateCvModal} from "@/pages/Profile/UpdateCvModal";
import Box from "@mui/material/Box";

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
          <TypographyDetails fieldName="Name" content={cvData.name} />
          <TypographyDetails
            fieldName="Description"
            content={cvData.description}
          />
          <TypographyDetails
            fieldName="User"
            content={cvData.user?.profile?.full_name}
          />
          <TypographyDetails
            fieldName="position"
            content={cvData.user?.position_name}
          />
          <TypographyDetails
            fieldName="Projects"
            content={cvData.projects.map(project => project.name)}
          />
          <TypographyDetails
            fieldName="Skills"
            content={cvData.skills.map(skill => skill.skill_name)}
          />
          <TypographyDetails
            fieldName="Languages"
            content={cvData.languages.map(language => language.language_name)}
          />
          <Box>
            <UpdateCvModal cvId={id!} userId={cvData?.user?.id} />
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};
