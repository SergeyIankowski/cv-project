import {FC} from "react";
import {TableProjects} from "@/pages/Projects/TableProjects/TableProjects";
import {useProjectsQuery} from "@/graphql/hooks/useProjectsQuery";

export const Projects: FC = () => {
  const {data} = useProjectsQuery();

  return <TableProjects projectsData={data} />;
};
