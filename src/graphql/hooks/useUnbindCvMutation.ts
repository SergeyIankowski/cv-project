import {useCallback} from "react";
import {useMutation} from "@apollo/client";
import {UNBIND_CV} from "@/graphql/mutations";
import {USER} from "@/graphql/queries";

export const useUnbindCvMutation = () => {
  const [loadData] = useMutation(UNBIND_CV, {refetchQueries: [USER]});

  const unbindCv = useCallback(
    (id: string | number) => loadData({variables: {id}}),
    []
  );

  return {unbindCv};
};
