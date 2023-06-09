/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {LANGUAGES} from "../queries";
import {LanguagesData} from "@/models/LanguagesData";

const convertQueryData: (data: any) => LanguagesData[] = data => {
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
  const [responseData, setResponceData] = useState<LanguagesData[]>([]);
  const {loading, data, error} = useQuery(LANGUAGES);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(convertQueryData(data));
  }, [loading]);

  return {loading, data: responseData};
};
