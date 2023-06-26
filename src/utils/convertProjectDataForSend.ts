import {UpdateProjectFormFields} from "@/models/FormFieldsTypes/UpdateProjectFormFields.type";
import {ProjectFormKeys} from "@/models/FormKeysNames/ProjectFormKeys";

export const convertProjectDataForSend = (
  data: UpdateProjectFormFields
): Required<UpdateProjectFormFields> => {
  return {
    [ProjectFormKeys.name]: data.name,
    [ProjectFormKeys.internal_name]: data.internal_name,
    [ProjectFormKeys.description]: data.description,
    [ProjectFormKeys.domain]: data.domain,
    [ProjectFormKeys.start_date]: data.start_date,
    [ProjectFormKeys.end_date]: data.end_date,
    [ProjectFormKeys.team_size]: data.team_size,
    [ProjectFormKeys.skillsIds]: [],
  };
};
