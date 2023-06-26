import {useMutation} from "@apollo/client";
import {UPDATE_PROJECT} from "../mutations";
import {UpdateProjectFormFields} from "@/models/FormFieldsTypes/UpdateProjectFormFields.type";
import {useCallback} from "react";

export const useUpdateProject = () => {
  const [loadData, {data, loading}] = useMutation(UPDATE_PROJECT);

  const updateProject = useCallback(
    (id: string, project: UpdateProjectFormFields) => {
      loadData({variables: {id, project}});
    },
    []
  );

  return {updateProject};
};
