import {PROFILE_FORM_KEYS} from "@/models/FormKeysNames";
import {ProfileRequestData} from "@/models/ProfileRequestData.type";
import {UpdateUserFormFields} from "@/models/FormFieldsTypes";

export const convertProfileFormDataToRequestData = (
  data: UpdateUserFormFields
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
