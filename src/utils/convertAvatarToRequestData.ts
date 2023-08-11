import {AvatarData} from "@/models/AvatarData.type";

export const convertAvatarToRequestData = (file: File): Promise<AvatarData> => {
  return new Promise(resolve => {
    const result: AvatarData = {
      base64: "",
      type: file.type,
      size: file.size,
    };

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      result.base64 = reader.result as string;
      resolve(result);
    };
  });
};
