import {useEffect} from "react";
import {useMutation} from "@apollo/client";
import {DELETE_AVATAR} from "../mutations";

export const useDeleteAvatar = () => {
  const [deleteAvatar, {data, loading, error}] = useMutation(DELETE_AVATAR);

  useEffect(() => {
    if (loading) return;
    if (error) console.error(`error in useDeleteAvatar ${error.message}`);
  }, [data, loading]);

  const deleteAvatarCallback = async (id: string | number) => {
    await deleteAvatar({
      variables: {
        id: Number(id) - 2,
      },
    });
  };

  return {deleteAvatar: deleteAvatarCallback};
};
