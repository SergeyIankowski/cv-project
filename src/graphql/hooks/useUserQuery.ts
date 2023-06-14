import {useLazyQuery} from "@apollo/client";
import {USER} from "../queries";
import {useCallback} from "react";
import {FETCH_POLICY} from "../fetchPolicy";

export const useUserQuery = () => {
  const [loadInfo, {called, loading, data}] = useLazyQuery(USER, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  const loadUserInfo = useCallback((id: string | number) => {
    const idAsString = String(id);
    return loadInfo({variables: {id: idAsString}});
  }, []);

  return {
    loadUserInfo,
    called,
    userData: data,
    loadingUserData: loading,
    calledUserData: called,
  };
};
