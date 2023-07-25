import {CvTableData} from "@/models/TableDataTypes";
import {CVS} from "../queries";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {Cv} from "../interfaces/Cv.interface";
import {FETCH_POLICY} from "../fetchPolicy";

const convertQueryData: (data: Cv[]) => CvTableData[] = data => {
  return data.map((cv: Cv) => {
    return {
      id: cv.id,
      name: cv.name,
      description: cv.description,
      userEmail: cv.user?.email || "",
      projects: cv?.projects.map(project => project.name) || [],
      isTemplate: cv.is_template,
    };
  });
};

export const useCvsQuery = () => {
  const [tableData, setTableData] = useState<CvTableData[]>([]);
  const [cvs, setCvs] = useState<Cv[]>([]);
  const {loading, data, error} = useQuery(CVS, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  useEffect(() => {
    if (loading) return;
    if (error) return;
    if (data) {
      setTableData(convertQueryData(data.cvs));
      setCvs(data.cvs);
    }
  }, [loading]);

  return {loading, tableCvs: tableData, cvs};
};
