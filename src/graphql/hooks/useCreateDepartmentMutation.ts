import {useMutation} from "@apollo/client";
import {CREATE_DEPARTMENT} from "@/graphql/mutations";
import {DEPARTMENTS} from "@/graphql/queries";
import {DepartmentInput} from "@/graphql/interfaces/DepartmentInput.type";

export const useCreateDepartmentMutation = () => {
  const [loadData] = useMutation(CREATE_DEPARTMENT, {
    refetchQueries: [DEPARTMENTS],
  });

  const createDepartment = async (department: DepartmentInput) => {
    await loadData({variables: {department}});
  };

  return {createDepartment};
};
