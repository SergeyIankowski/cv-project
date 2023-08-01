import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {PROJECTS} from "@/graphql/queries";
import {ProjectTableData} from "@/models/TableDataTypes";
import {Project} from "@/graphql/interfaces/Project.interface";
import {FETCH_POLICY} from "@/graphql/fetchPolicy";

const convertQueryData: (data: Project[]) => ProjectTableData[] = data => {
  return data.map((project: Project) => {
    return {
      id: project.id,
      name: project.name,
      internalName: project.internal_name,
      domain: project.domain,
      startDate: project.start_date,
      endDate: project.end_date,
      teamSize: project.team_size,
    };
  });
};
export const useProjectsQuery = () => {
  const [tableProjects, setTableProjects] = useState<ProjectTableData[] | null>(
    null
  );
  const [projects, setProjects] = useState<Project[]>([]);
  const {loading, data, error} = useQuery(PROJECTS, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  useEffect(() => {
    if (loading) return;
    if (error) return;
    if (data) {
      setTableProjects(convertQueryData(data.projects));
      setProjects(data.projects);
    }
  }, [loading, data]);

  return {loading, projects, tableProjects};
};
