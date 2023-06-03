import {FC} from "react";
import {TableProjects} from "@/components/containers/TableProjects/TableProjects";
import {useProjectsQuery} from "@/graphql/hooks/useProjectsQuery";

export const Projects: FC = () => {
  const {data} = useProjectsQuery();

  return <TableProjects projectsData={data} />;
};
