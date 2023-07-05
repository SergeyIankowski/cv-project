import {useMutation} from "@apollo/client";
import {CREATE_POSITION} from "@/graphql/mutations";
import {POSITIONS} from "@/graphql/queries";
import {PositionInput} from "@/graphql/interfaces/PositionInput.type";

export const useCreatePositionMutation = () => {
  const [loadData] = useMutation(CREATE_POSITION, {
    refetchQueries: [POSITIONS],
  });
  const createPosition = async (position: PositionInput) => {
    await loadData({variables: {position}});
  };

  return {createPosition};
};
