/* eslint-disable @typescript-eslint/no-explicit-any */
import {CvData} from "@/models/CvData";
import {CVS} from "../queries";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";

const convertQueryData: (data: any) => CvData[] = data => {
  return data.cvs.map((cv: any) => {
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
  const [responseData, setResponceData] = useState<CvData[]>([]);
  const {loading, data, error} = useQuery(CVS);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(convertQueryData(data));
  }, [loading]);

  return {loading, data: responseData};
};