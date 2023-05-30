import {ProfileRequestData} from "@/models/ProfileRequestData.type";
import {UploadedUser} from "@/models/UploadedUser.type";

export const convertProfileFormDataToRequestData = (
  data: UploadedUser
): ProfileRequestData => {
  return {
    profile: {
      first_name: data.first_name || "",
      last_name: data.last_name || "",
    },
    departmentId: data.departmentId || "",
    positionId: data.positionId || "",
  };
};
