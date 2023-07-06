import {useMutation} from "@apollo/client";
import {UPDATE_POSITION} from "@/graphql/mutations";
import {POSITIONS} from "@/graphql/queries";
import {Position} from "@/graphql/interfaces/Position.interface";
import {PositionInput} from "@/graphql/interfaces/PositionInput.type";

export const useUpdatePositionMutation = () => {
  const [loadData] = useMutation(UPDATE_POSITION, {
    refetchQueries: [POSITIONS],
  });
  const updatePosition = async (
    id: Position["id"],
    position: PositionInput
  ) => {
    await loadData({variables: {id, position}});
  };

  return {updatePosition};
};
