import {useMutation} from "@apollo/client";
import {UNBIND_CV} from "../mutations";
import {useCallback} from "react";

export const useUnbindCvMutation = () => {
  const [loadData] = useMutation(UNBIND_CV);

  const unbindCv = useCallback(
    (id: string | number) => loadData({variables: {id}}),
    []
  );

  return {unbindCv};
};
