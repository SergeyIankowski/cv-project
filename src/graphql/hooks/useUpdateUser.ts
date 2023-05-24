import {useMutation} from "@apollo/client";
import {UPDATE_USER} from "../mutations";

export const useUpdateUser = () => {
  const [updateUser, {data, loading, error}] = useMutation(UPDATE_USER);

  return {updateUser, loading, data, error};
};
