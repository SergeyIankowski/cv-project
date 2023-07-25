import {useMutation} from "@apollo/client";
import {DELETE_DEPARTMENT} from "@/graphql/mutations";
import {DEPARTMENTS} from "@/graphql/queries";
import {Department} from "@/graphql/interfaces/Department.interface";

export const useDeleteDepartment = () => {
  const [loadData] = useMutation(DELETE_DEPARTMENT, {
    refetchQueries: [DEPARTMENTS],
  });
  const deleteDepartment = async (id: Department["id"]) => {
    await loadData({variables: {id}});
  };

  return {deleteDepartment};
};
