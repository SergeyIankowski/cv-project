import {FC, ReactInstance, useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import {useReactToPrint} from "react-to-print";
import {useTranslation} from "react-i18next";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {Button} from "@containers/Button";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {UserInfo} from "@/pages/CvProfile/CvPreview/UserInfo";
import {CvAbilities} from "@/pages/CvProfile/CvPreview/CvAbilities";
import {CvPreviewProject} from "@/pages/CvProfile/CvPreview/CvPreviewProject";

export const CvPreview: FC = () => {
  const {id} = useParams();
  const {loadCv, cvData, called, loading} = useCvQuery();
  const cvRef = useRef<ReactInstance | null>(null);
  const {t} = useTranslation();
  useEffect(() => {
    if (!called) loadCv(id!);
  }, [cvData]);

  const handlePrintClick = useReactToPrint({
    content: () => cvRef.current,
  });

  if (loading && !called) return <ProgressSpinner />;
  return (
    <Box sx={{m: "0 auto", width: "1000px", p: "20px"}}>
      <Grid container direction="column" gap="10px">
        <Button
          color="error"
          sx={{alignSelf: "flex-end"}}
          variant="contained"
          onClick={handlePrintClick}
        >
          {t("print").toUpperCase()}
        </Button>

        <Box ref={cvRef}>
          <Paper elevation={6}>
            <Grid container direction="column">
              <Grid container>
                <UserInfo
                  avatar={cvData.user?.profile.avatar}
                  name={cvData.user?.profile.full_name}
                  email={cvData.user?.email || ""}
                  position={cvData.user?.position_name}
                  department={cvData.user?.department_name}
                />
                <Divider orientation="vertical" flexItem />
                <CvAbilities
                  skills={cvData.skills}
                  languages={cvData.languages}
                />
              </Grid>
              <Divider flexItem />
              <Typography variant="h6" sx={{alignSelf: "center"}}>
                Projects:
              </Typography>
              {cvData.projects.map(project => (
                <CvPreviewProject
                  key={project.id}
                  projectName={project.name}
                  startDate={project.start_date}
                  endDate={project.end_date}
                  domain={project.domain}
                  description={project.description}
                />
              ))}
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Box>
  );
};
