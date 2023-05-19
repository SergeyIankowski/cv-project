import {useLazyQuery} from "@apollo/client";
import {USER} from "../queries";
import {useEffect} from "react";

export const useUserQuery = () => {
  const [loadUserInfo, {called, loading, data}] = useLazyQuery(USER);

  useEffect(() => {
    if (called) console.log(data);
  }, [data, called]);

  return {loadUserInfo, data, loading};
};
