import {useAuthToken} from "@/hooks/useAuthToken";
import {useMutation} from "@apollo/client";
import {SIGN_UP} from "../mutations";
import {useEffect} from "react";
import {AuthInfoService} from "@/services/AuthInfoService";

export const useSignUpMutation = () => {
  const {setAuthToken} = useAuthToken();
  const [signUp, {data, loading, error}] = useMutation(SIGN_UP);

  useEffect(() => {
    if (error) return;
    if (!loading && data) {
      setAuthToken(data.signup.access_token);
      AuthInfoService.saveAuthInfo(data.login.user);
    }
  }, [loading, error, data]);

  return {signUp};
};
