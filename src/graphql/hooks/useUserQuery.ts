import {useLazyQuery} from "@apollo/client";
import {USER} from "../queries";

export const useUserQuery = () => {
  const [loadUserInfo, {called, loading, data}] = useLazyQuery(USER);

  return {loadUserInfo, called, data, loading};
};
