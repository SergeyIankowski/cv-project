import {useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import {LOGIN_QUERY} from "@/graphql/queries/login";
import {useAuthToken} from "../../hooks/useAuthToken";

export const useLoginQuery = () => {
  const {setAuthToken} = useAuthToken();
  const [LoadLoginData, {called, error, loading, data}] =
    useLazyQuery(LOGIN_QUERY);

  useEffect(() => {
    if (error) return;
    if (!loading && called) setAuthToken(data.login.access_token);
  }, [loading, error]);

  return [loading, data, LoadLoginData];
};
