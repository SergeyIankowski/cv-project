import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {useProjectQuery} from "@/graphql/hooks/useProjectQuery";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {FetchedProject} from "@/models/FetchedProject.interface";
import {TypographyProjectDetails} from "@/components/view/Typographics/Typographics";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";
import {UpdateProjectModal} from "../UpdateProjectModal";

const initialProject: FetchedProject = {
  id: "",
  name: "",
  internal_name: "",
  description: "",
  domain: "",
  start_date: "",
  end_date: "",
  team_size: 0,
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

  return (
    <Grid container direction="column" alignItems="flex-start" gap="10px">
      <TypographyProjectDetails fieldName="Name" text={project.name} />
      <TypographyProjectDetails
        fieldName="Internal Name"
        text={project.internal_name!}
      />
      <TypographyProjectDetails
        fieldName="Description"
        text={project.description}
      />
      <TypographyProjectDetails fieldName="Domain" text={project.domain} />
      <TypographyProjectDetails
        fieldName="Start Date"
        text={project.start_date as string}
      />
      <TypographyProjectDetails
        fieldName="End Date"
        text={(project.end_date || EmptyFieldStrings.tillNow) as string}
      />
      <TypographyProjectDetails
        fieldName="Team Size"
        text={String(project.team_size)}
      />
      <UpdateProjectModal projectData={project} />
    </Grid>
  );
};
