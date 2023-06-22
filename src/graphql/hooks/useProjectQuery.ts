import {useLazyQuery} from "@apollo/client";
import {PROJECT} from "../queries";
import {FETCH_POLICY} from "../fetchPolicy";
import {useCallback} from "react";

export const useProjectQuery = () => {
  const [loadInfo, {called, loading, data, error}] = useLazyQuery(PROJECT, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  const loadProjectInfo = useCallback((id: string | number) => {
    const idAsString = String(id);
    return loadInfo({variables: {id: idAsString}});
  }, []);

  return {
    loadProjectInfo,
    calledProjectQuery: called,
    projectData: data,
    loadingProjectData: loading,
    calledProjectData: called,
    error,
  };
};
