import {useMutation} from "@apollo/client";
import {DELETE_PROJECT} from "../mutations";
import {useCallback} from "react";
import {Project} from "../interfaces/Project.interface";

export const useDeleteProjectMutation = () => {
  const [loadData] = useMutation(DELETE_PROJECT);

  const deleteProject = useCallback((id: Project["id"]) => {
    loadData({variables: {id}});
  }, []);

  return {deleteProject};
};
