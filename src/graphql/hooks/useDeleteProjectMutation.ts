import {useMutation} from "@apollo/client";
import {DELETE_PROJECT} from "../mutations";
import {useCallback} from "react";

export const useDeleteProjectMutation = () => {
  const [loadData] = useMutation(DELETE_PROJECT);

  const deleteProject = useCallback((id: string) => {
    loadData({variables: {id}});
  }, []);

  return {deleteProject};
};
