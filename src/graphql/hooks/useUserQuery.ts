import {useLazyQuery} from "@apollo/client";
import {USER} from "@/graphql/queries";
import {useCallback} from "react";
import {FETCH_POLICY} from "@/graphql/fetchPolicy";
import {Skill} from "@/graphql/interfaces/Skill.interface";

export const useUserQuery = () => {
  const [loadInfo, {called, loading, data, error}] = useLazyQuery(USER, {
    fetchPolicy: FETCH_POLICY.cacheFirst,
  });

  const loadUserInfo = useCallback((id: Skill["id"]) => {
    const idAsString = String(id);
    return loadInfo({variables: {id: idAsString}});
  }, []);

  return {
    loadUserInfo,
    userData: data,
    loadingUserData: loading,
    calledUserData: called,
    error,
  };
};
