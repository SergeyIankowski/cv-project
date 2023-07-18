import {useMutation} from "@apollo/client";
import {UPDATE_USER} from "@/graphql/mutations";
import {User} from "@/graphql/interfaces/User.interface";
import {UpdateUserInput} from "@/graphql/interfaces/UpdateUserInput.interface";
import {USER} from "@/graphql/queries";
import {MUTATION_FETCH_POLICY} from "@/graphql/fetchPolicy";

export const useUpdateUser = () => {
  const [loadData, {data, loading, error}] = useMutation(UPDATE_USER, {
    fetchPolicy: MUTATION_FETCH_POLICY.networkOnly,
    refetchQueries: [USER],
  });

  const updateUser = async (id: User["id"], user: UpdateUserInput) => {
    await loadData({variables: {id, user}});
  };

  return {updateUser, loading, data, error};
};
