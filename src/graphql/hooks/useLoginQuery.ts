import {useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import {LOGIN_QUERY} from "@/graphql/queries";
import {useAuthToken} from "../../hooks/useAuthToken";
import {AuthInfoService} from "@/services/AuthInfoService";

export const useLoginQuery = () => {
  const {setAuthToken} = useAuthToken();
  const [loadLoginData, {called, error, loading, data}] =
    useLazyQuery(LOGIN_QUERY);

  useEffect(() => {
    if (error) return;
    if (!loading && called) {
      setAuthToken(data.login.access_token);
      AuthInfoService.saveAuthInfo(data.login.user);
    }
  }, [loading, error]);

  return {loading, data, loadLoginData};
};
