import {useMutation} from "@apollo/client";
import {DELETE_PROJECT} from "@/graphql/mutations";
import {useCallback} from "react";
import {Project} from "@/graphql/interfaces/Project.interface";
import {PROJECTS} from "@/graphql/queries";

export const useDeleteProjectMutation = () => {
  const [loadData] = useMutation(DELETE_PROJECT, {refetchQueries: [PROJECTS]});

  const deleteProject = useCallback((id: Project["id"]) => {
    loadData({variables: {id}});
  }, []);

  return {deleteProject};
};
