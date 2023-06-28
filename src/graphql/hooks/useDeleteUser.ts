import {useMutation} from "@apollo/client";
import {DELETE_USER} from "../mutations";
import {USERS} from "../queries";
import {useEffect} from "react";
import {showToast} from "@/hoc/ToastsProvider";
import {TOASTS_MESSAGES} from "@/models/ToastsMessages";
import {TOAST_TYPES} from "@/models/ToastTypes";

export const useDeleteUser = () => {
  const [loadData, {loading, data, error}] = useMutation(DELETE_USER, {
    refetchQueries: [USERS],
  });

  useEffect(() => {
    if (!loading && !error && data) {
      showToast(TOASTS_MESSAGES.success, TOAST_TYPES.success);
    }
  }, [loading, error, data]);

  const deleteUser = async (id: number | string) => {
    await loadData({variables: {id}});
  };

  return {deleteUser};
};
