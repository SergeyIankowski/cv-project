import {useMutation} from "@apollo/client";
import {UPLOAD_AVATAR} from "../mutations";
import {useEffect} from "react";
import {AvatarData} from "@/models/AvatarData.type";
import {getIdForAvatarChanging} from "@/utils/getIdForAvatarChanging";

export const useUploadAvatar = () => {
  const [uploadAvatar, {data, loading, error}] = useMutation(UPLOAD_AVATAR, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (error) console.error(`Error in useUploadAvatar ${error.message}`);
  }, [error]);

  const uploadAvatarHandler = async (
    id: number | string,
    avatar: AvatarData
  ) => {
    await uploadAvatar({
      variables: {
        id: getIdForAvatarChanging(id),
        avatar,
      },
    });
  };

  return {uploadAvatar: uploadAvatarHandler, data, loading};
};
