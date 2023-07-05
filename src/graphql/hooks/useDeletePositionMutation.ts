import {useMutation} from "@apollo/client";
import {DELETE_POSITION} from "../mutations";
import {POSITIONS} from "../queries";
import {Position} from "../interfaces/Position.interface";

export const useDeletePositionMutation = () => {
  const [loadData] = useMutation(DELETE_POSITION, {
    refetchQueries: [POSITIONS],
  });
  const deletePosition = async (id: Position["id"]) => {
    await loadData({variables: {id}});
  };

  return {deletePosition};
};
