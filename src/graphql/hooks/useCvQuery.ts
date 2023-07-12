import {useLazyQuery} from "@apollo/client";
import {CV} from "../queries";
import {useEffect, useState} from "react";
import {Cv} from "../interfaces/Cv.interface";
import {FETCH_POLICY} from "../fetchPolicy";

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

export const useCvQuery = () => {
  const [loadInfo, {data, loading, error}] = useLazyQuery(CV, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });
  const [cv, setCv] = useState(initial);

  const loadCv = (id: Cv["id"]) => {
    return loadInfo({variables: {id}});
  };

  useEffect(() => {
    if (loading) return;
    if (error) return;
    if (data) {
      setCv(data.cv);
    }
  }, [loading, data]);

  return {loadCv, cvData: cv};
};
