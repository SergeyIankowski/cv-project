import {UpdatedProject} from "@/models/UpdatedProject.type";
import {ProjectFormKeys} from "@/models/projectFormKeys";

export const convertProjectDataForSend = (
  data: UpdatedProject
): Required<UpdatedProject> => {
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
