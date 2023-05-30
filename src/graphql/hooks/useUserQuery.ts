import {useLazyQuery} from "@apollo/client";
import {USER} from "../queries";
import {useCallback} from "react";

export const useUserQuery = () => {
  const [loadInfo, {called, loading, data}] = useLazyQuery(USER);

  const loadUserInfo = useCallback((id: string | number) => {
    return loadInfo({variables: {id}});
  }, []);

  return {
    loadUserInfo,
    called,
    userData: data,
    loadingUserData: loading,
    calledUserData: called,
  };
};
