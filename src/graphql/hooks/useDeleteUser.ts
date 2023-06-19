import {useMutation} from "@apollo/client";
import {DELETE_USER} from "../mutations";

export const useDeleteUser = () => {
  const [loadData] = useMutation(DELETE_USER);

  const deleteUser = async (id: number | string) => {
    await loadData({variables: {id}});
  };

  return {deleteUser};
};
