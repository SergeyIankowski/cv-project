import {useMutation} from "@apollo/client";
import {UPDATE_CV} from "@/graphql/mutations";
import {useCallback} from "react";
import {USER} from "@/graphql/queries";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {CvInput} from "@/graphql/interfaces/CvInput.interface";

export const useUpdateCvMutation = () => {
  const [loadData] = useMutation(UPDATE_CV, {
    refetchQueries: [USER],
  });

  const updateCv = useCallback(
    async (id: Cv["id"], cv: CvInput) => await loadData({variables: {id, cv}}),
    []
  );
  return {updateCv};
};
