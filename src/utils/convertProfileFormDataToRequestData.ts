import {PROFILE_FORM_KEYS} from "@/models/FormKeysNames";
import {UpdateUserFormFields} from "@/models/FormFieldsTypes";
import {UpdateUserInput} from "@/graphql/interfaces/UpdateUserInput.interface";

export const convertProfileFormDataToRequestData = (
  data: UpdateUserFormFields
): UpdateUserInput => {
  return {
    profile: {
      [PROFILE_FORM_KEYS.firstName]: data.first_name || "",
      [PROFILE_FORM_KEYS.lastName]: data.last_name || "",
    },
    [PROFILE_FORM_KEYS.departmentId]: data.departmentId || "",
    [PROFILE_FORM_KEYS.positionId]: data.positionId || "",
  };
};
