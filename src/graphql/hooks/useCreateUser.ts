import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../mutations";
import {USERS} from "../queries";
import {CreatedUser} from "@/models/CreatedUser.type";
import {useEffect} from "react";
import {showToast} from "@/hoc/ToastsProvider";
import {TOAST_TYPES} from "@/models/ToastTypes";
import {TOASTS_MESSAGES} from "@/models/ToastsMessages";

export const useCreateUser = () => {
  const [loadData, {called, loading, data, error}] = useMutation(CREATE_USER, {
    refetchQueries: [USERS],
  });
  useEffect(() => {
    if (called && !loading && data && !error) {
      showToast(TOASTS_MESSAGES.success, TOAST_TYPES.success);
    }
  }, [called, loading, data, error]);
  const createUser = async (data: CreatedUser) => {
    await loadData({variables: {user: data}});
  };
  return {createUser};
};
