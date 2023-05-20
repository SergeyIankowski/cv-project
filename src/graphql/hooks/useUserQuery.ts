import {useLazyQuery} from "@apollo/client";
import {USER} from "../queries";

export const useUserQuery = () => {
  const [loadUserInfo, {loading, data}] = useLazyQuery(USER);

  return {loadUserInfo, data, loading};
};
