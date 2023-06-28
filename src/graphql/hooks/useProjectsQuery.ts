/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {PROJECTS} from "../queries";
import {FetchedProject} from "@/models/FetchedProject";
import {ProjectTableData} from "@/models/TableDataTypes";

const convertQueryData: (data: any) => ProjectTableData[] = data => {
  return data.projects.map((project: FetchedProject) => {
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
  const [responseData, setResponceData] = useState<ProjectTableData[]>([]);
  const {loading, data, error} = useQuery(PROJECTS);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(convertQueryData(data));
  }, [loading]);

  return {loading, data: responseData};
};
