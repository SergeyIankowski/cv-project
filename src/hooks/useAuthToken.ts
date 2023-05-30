import {useCookies} from "react-cookie";

const AUTH_TOKEN = "authToken";

export const useAuthToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies([AUTH_TOKEN]);

  const setAuthToken = (authToken: string) =>
    setCookie(AUTH_TOKEN, authToken, {path: "/"});

  const removeAuthToken = () => removeCookie(AUTH_TOKEN, {path: "/"});

  return {authToken: cookies[AUTH_TOKEN], setAuthToken, removeAuthToken};
};
