import {useLazyQuery} from "@apollo/client";
import {CV} from "../queries";
import {useEffect, useState} from "react";
import {Cv} from "../interfaces/Cv.interface";
import {FETCH_POLICY} from "../fetchPolicy";
import {ProjectTableData} from "@/models/TableDataTypes";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

const initial: Cv = {
  id: "",
  created_at: "",
  name: "",
  description: "",
  projects: [],
  skills: [],
  languages: [],
  is_template: false,
};

type convertCvProjectsToTableDataType = (
  projects: Cv["projects"]
) => ProjectTableData[];
const convertCvProjectsToTableData: convertCvProjectsToTableDataType =
  projects => {
    if (!projects) return [];
    return projects.map(project => {
      return {
        id: project.id,
        name: project.name,
        internalName: project.internal_name,
        domain: project.domain,
        startDate: project.start_date,
        endDate: project?.end_date || EmptyFieldStrings.tillNow,
        teamSize: project.team_size,
      };
    });
  };

export const useCvQuery = () => {
  const [loadInfo, {called, data, loading, error}] = useLazyQuery(CV, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });
  const [cv, setCv] = useState(initial);
  const [tableCvProjects, settableCvProjects] = useState<ProjectTableData[]>(
    []
  );

  const loadCv = (id: Cv["id"]) => {
    return loadInfo({variables: {id}});
  };

  useEffect(() => {
    if (loading) return;
    if (error) return;
    if (data) {
      setCv(data.cv);
      settableCvProjects(convertCvProjectsToTableData(data.cv.projects));
    }
  }, [loading, data]);

  return {
    called,
    loading,
    loadCv,
    cvData: cv,
    tableCvProjects,
  };
};
