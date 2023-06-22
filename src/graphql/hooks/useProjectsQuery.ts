/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {ProjectData} from "@/models/ProjectData.type";
import {useQuery} from "@apollo/client";
import {PROJECTS} from "../queries";

const convertQueryData: (data: any) => ProjectData[] = data => {
  return data.projects.map((project: any) => {
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
  const [responseData, setResponceData] = useState<ProjectData[]>([]);
  const {loading, data, error} = useQuery(PROJECTS);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(convertQueryData(data));
  }, [loading]);

  return {loading, data: responseData};
};
