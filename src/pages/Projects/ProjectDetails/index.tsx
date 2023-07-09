import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";
import {useProjectQuery} from "@/graphql/hooks/useProjectQuery";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {FetchedProject} from "@/models/FetchedProject.interface";
import {TypographyDetails} from "@view/TypographyDetails";
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
    <Card>
      <CardContent>
        <Grid container direction="column" alignItems="flex-start" gap="10px">
          <TypographyDetails fieldName="Name" content={project.name} />
          <TypographyDetails
            fieldName="Internal Name"
            content={project.internal_name!}
          />
          <TypographyDetails
            fieldName="Description"
            content={project.description}
          />
          <TypographyDetails fieldName="Domain" content={project.domain} />
          <TypographyDetails
            fieldName="Start Date"
            content={project.start_date as string}
          />
          <TypographyDetails
            fieldName="End Date"
            content={(project.end_date || EmptyFieldStrings.tillNow) as string}
          />
          <TypographyDetails
            fieldName="Team Size"
            content={String(project.team_size)}
          />
          <UpdateProjectModal projectData={project} />
        </Grid>
      </CardContent>
    </Card>
  );
};
