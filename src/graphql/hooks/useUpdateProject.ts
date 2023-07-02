import {useMutation} from "@apollo/client";
import {UPDATE_PROJECT} from "../mutations";
import {ProjectFormFields} from "@/models/FormFieldsTypes";
import {useCallback} from "react";

export const useUpdateProject = () => {
  const [loadData, {data, loading}] = useMutation(UPDATE_PROJECT);

  const updateProject = useCallback(
    (id: string, project: ProjectFormFields) => {
      loadData({variables: {id, project}});
    },
    []
  );

  return {updateProject, data, loading};
};
