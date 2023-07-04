/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {LANGUAGES} from "../queries";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {Language} from "../interfaces/Language.interface";

const convertQueryData: (data: Language[]) => LanguagesTableData[] = data => {
  return data.map((language: any) => {
    return {
      id: language.id,
      name: language.name,
      nativeName: language.native_name,
      iso2: language.iso2,
    };
  });
};

export const useLanguagesQuery = () => {
  const [tableData, setTableData] = useState<LanguagesTableData[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const {loading, data, error} = useQuery(LANGUAGES);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    if (data) {
      setTableData(convertQueryData(data.languages));
      setLanguages(data.languages);
    }
  }, [loading, data]);

  return {loading, languages, tableLanguages: tableData};
};
