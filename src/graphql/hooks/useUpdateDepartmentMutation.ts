import {useMutation} from "@apollo/client";
import {UPDATE_DEPARTMENT} from "@/graphql/mutations";
import {Department} from "@/graphql/interfaces/Department.interface";
import {DepartmentInput} from "@/graphql/interfaces/DepartmentInput.type";
import {DEPARTMENTS} from "../queries";

export const useUpdateDepartmentMutation = () => {
  const [loadData] = useMutation(UPDATE_DEPARTMENT, {
    refetchQueries: [DEPARTMENTS],
  });
  const updateDepartment = async (
    id: Department["id"],
    department: DepartmentInput
  ) => {
    loadData({variables: {id, department}});
  };

  return {updateDepartment};
};
