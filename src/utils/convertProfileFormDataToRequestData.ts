import {PROFILE_FORM_KEYS} from "@/models/ProfileFormKeys";
import {ProfileRequestData} from "@/models/ProfileRequestData.type";
import {UploadedUser} from "@/models/UploadedUser.type";

export const convertProfileFormDataToRequestData = (
  data: UploadedUser
): ProfileRequestData => {
  return {
    profile: {
      [PROFILE_FORM_KEYS.firstName]: data.first_name || "",
      [PROFILE_FORM_KEYS.lastName]: data.last_name || "",
    },
    [PROFILE_FORM_KEYS.departmentId]: data.departmentId || "",
    [PROFILE_FORM_KEYS.positionId]: data.positionId || "",
  };
};
