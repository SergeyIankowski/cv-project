import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../mutations";
import {USERS} from "../queries";
import {CreatedUser} from "@/models/CreatedUser.type";

export const useCreateUser = () => {
  const [loadData] = useMutation(CREATE_USER, {
    refetchQueries: [
      {
        query: USERS,
      },
    ],
  });
  const createUser = async (data: CreatedUser) => {
    await loadData({variables: {user: data}});
  };
  return {createUser};
};
