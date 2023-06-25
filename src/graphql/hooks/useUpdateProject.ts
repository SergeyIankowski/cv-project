import {useMutation} from "@apollo/client";
import {UPDATE_PROJECT} from "../mutations";
import {UpdatedProject} from "@/models/UpdatedProject.type";
import {useCallback} from "react";

export const useUpdateProject = () => {
  const [loadData, {data, loading}] = useMutation(UPDATE_PROJECT);

  const updateProject = useCallback((id: string, project: UpdatedProject) => {
    loadData({variables: {id, project}});
  }, []);

  return {updateProject};
};
