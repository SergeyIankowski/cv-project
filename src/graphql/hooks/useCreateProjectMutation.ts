import {useMutation} from "@apollo/client";
import {CREATE_PROJECT} from "@/graphql/mutations";
import {PROJECTS} from "@/graphql/queries";
import {ProjectFormFields} from "@/models/FormFieldsTypes";

export const useCreateProjectMutation = () => {
  const [loadData, {called, loading, data, error}] = useMutation(
    CREATE_PROJECT,
    {refetchQueries: [PROJECTS]}
  );
  const createProject = (project: ProjectFormFields) => {
    loadData({variables: {project}});
  };

  return {createProject, called, data, loading, error};
};
