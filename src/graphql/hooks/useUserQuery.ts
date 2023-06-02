import {useLazyQuery} from "@apollo/client";
import {USER} from "../queries";
import {useCallback} from "react";

export const useUserQuery = () => {
  const [loadInfo, {called, loading, data}] = useLazyQuery(USER, {
    fetchPolicy: "cache-and-network",
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
