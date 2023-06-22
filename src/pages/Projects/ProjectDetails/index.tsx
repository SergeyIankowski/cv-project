import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {useProjectQuery} from "@/graphql/hooks/useProjectQuery";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {FetchedProject} from "@/models/FetchedProject";
import {TypographyProjectDetails} from "@/components/view/Typographics/Typographics";

const initialProject: FetchedProject = {
  id: "",
  name: "",
  internal_name: "",
  description: "",
  domain: "",
  start_date: "",
  end_date: "",
  team_size: "",
};

export const ProjectDetails: FC = () => {
  const {id} = useParams();
  const {loadProjectInfo, calledProjectData, loadingProjectData, projectData} =
    useProjectQuery();
  const [project, setProject] = useState<FetchedProject>(initialProject);

  useEffect(() => {
    if (!calledProjectData) {
      loadProjectInfo(id!);
    }
    if (calledProjectData && !loadingProjectData) {
      setProject(projectData.project);
    }
  }, [calledProjectData, loadingProjectData, projectData]);

  if (loadingProjectData) return <ProgressSpinner />;
  console.log(project);
  return (
    <Grid container direction="column" gap="10px">
      <TypographyProjectDetails fieldName="Name" text={project.name} />
      <TypographyProjectDetails
        fieldName="Internal Name"
        text={project.internal_name}
      />
      <TypographyProjectDetails
        fieldName="Description"
        text={project.description}
      />
      <TypographyProjectDetails fieldName="Domain" text={project.domain} />
      <TypographyProjectDetails
        fieldName="Start Date"
        text={project.start_date}
      />
      <TypographyProjectDetails fieldName="End Date" text={project.end_date} />
      <TypographyProjectDetails
        fieldName="Team Size"
        text={project.team_size}
      />
    </Grid>
  );
};
