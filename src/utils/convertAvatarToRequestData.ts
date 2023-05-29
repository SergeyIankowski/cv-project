import {AvatarData} from "@/models/AvatarData.type";

export const convertAvatarToRequestData = (
  file: File,
  requestCallback: (avatar: AvatarData) => void
) => {
  const result: AvatarData = {
    base64: "",
    type: file.type,
    size: file.size,
  };

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    result.base64 = reader.result as string;
    requestCallback(result);
  };
};
