import {Cv} from "@/graphql/interfaces/Cv.interface";
import {CvInput} from "@/graphql/interfaces/CvInput.interface";

export const prepareCvProjectsForSend = (
  cv: Cv,
  projectsIds: CvInput["projectsIds"]
) => {
  return {
    name: cv.name,
    description: cv.description,
    userId: cv.user?.id,
    projectsIds: projectsIds,
    skills: cv.skills.map(skill => {
      return {
        skill_name: skill.skill_name,
        mastery: skill.mastery,
      };
    }),
    languages: cv.languages.map(language => {
      return {
        language_name: language.language_name,
        proficiency: language.proficiency,
      };
    }),
    is_template: cv.is_template,
  };
};
