/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {LANGUAGES} from "../queries";
import {LanguagesTableData} from "@/models/LanguagesTableData.interface";

const convertQueryData: (data: any) => LanguagesTableData[] = data => {
  return data.languages.map((language: any) => {
    return {
      id: language.id,
      name: language.name,
      nativeName: language.native_name,
      iso2: language.iso2,
    };
  });
};

export const useLanguagesQuery = () => {
  const [responseData, setResponceData] = useState<LanguagesTableData[]>([]);
  const {loading, data, error} = useQuery(LANGUAGES);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(convertQueryData(data));
  }, [loading]);

  return {loading, data: responseData};
};
