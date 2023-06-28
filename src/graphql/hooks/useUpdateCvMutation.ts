import {useMutation} from "@apollo/client";
import {UPDATE_CV} from "../mutations";
import {useCallback} from "react";
import {USER} from "../queries";
import {Cv} from "../interfaces/Cv.interface";
import {CvInput} from "../interfaces/CvInput.interface";

export const useUpdateCvMutation = () => {
  const [loadData] = useMutation(UPDATE_CV, {refetchQueries: [USER]});

  const updateCv = useCallback(
    async (id: Cv["id"], cv: CvInput) => await loadData({variables: {id, cv}}),
    []
  );
  return {updateCv};
};
