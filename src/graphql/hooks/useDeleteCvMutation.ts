import {useMutation} from "@apollo/client";
import {DELETE_CV} from "@/graphql/mutations";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {CVS} from "@/graphql/queries";

export const useDeleteCvMutation = () => {
  const [loadData] = useMutation(DELETE_CV, {
    refetchQueries: [CVS],
  });

  const deleteCv = async (id: Cv["id"]) => {
    await loadData({variables: {id}});
  };

  return {deleteCv};
};
