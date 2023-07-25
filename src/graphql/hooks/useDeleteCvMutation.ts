import {useMutation} from "@apollo/client";
import {DELETE_CV} from "../mutations";
import {Cv} from "../interfaces/Cv.interface";

export const useDeleteCvMutation = () => {
  const [loadData] = useMutation(DELETE_CV);

  const deleteCv = async (id: Cv["id"]) => {
    await loadData({variables: {id}});
  };

  return {deleteCv};
};
