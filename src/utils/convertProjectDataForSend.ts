import {ProjectFormFields} from "@/models/FormFieldsTypes";
import {PROJECT_FORM_KEYS} from "@/models/FormKeysNames";

export const convertProjectDataForSend = (
  data: ProjectFormFields
): Required<ProjectFormFields> => {
  return {
    [PROJECT_FORM_KEYS.name]: data.name,
    [PROJECT_FORM_KEYS.internal_name]: data.internal_name,
    [PROJECT_FORM_KEYS.description]: data.description,
    [PROJECT_FORM_KEYS.domain]: data.domain,
    [PROJECT_FORM_KEYS.start_date]: data.start_date,
    [PROJECT_FORM_KEYS.end_date]: data.end_date,
    [PROJECT_FORM_KEYS.team_size]: Number(data.team_size),
    [PROJECT_FORM_KEYS.skillsIds]: data.skillsIds ? [...data.skillsIds] : [],
  };
};
