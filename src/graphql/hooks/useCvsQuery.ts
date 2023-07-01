/* eslint-disable @typescript-eslint/no-explicit-any */
import {CvTableData} from "@/models/TableDataTypes";
import {CVS} from "../queries";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {Cv} from "../interfaces/Cv.interface";

const convertQueryData: (data: Cv[]) => CvTableData[] = data => {
  return data.map((cv: Cv) => {
    return {
      id: cv.id,
      name: cv.name,
      description: cv.description,
      userEmail: cv.user?.email || "",
      isTemplate: cv.is_template,
    };
  });
};

export const useCvsQuery = () => {
  const [tableData, setTableData] = useState<CvTableData[]>([]);
  const [cvs, setCvs] = useState<Cv[]>([]);
  const {loading, data, error} = useQuery(CVS);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setTableData(convertQueryData(data.cvs));
    setCvs(data.cvs);
  }, [loading]);

  return {loading, tableCvs: tableData, cvs};
};
