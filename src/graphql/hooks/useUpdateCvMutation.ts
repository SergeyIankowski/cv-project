import {useMutation} from "@apollo/client";
import {UPDATE_CV} from "../mutations";
import {useCallback} from "react";
import {Cv} from "@/models/Cv.type";
import {USER} from "../queries";

export const useUpdateCvMutation = () => {
  const [loadData] = useMutation(UPDATE_CV, {refetchQueries: [USER]});

  const updateCv = useCallback(
    async (id: string, cv: Cv) => await loadData({variables: {id, cv}}),
    []
  );
  return {updateCv};
};
