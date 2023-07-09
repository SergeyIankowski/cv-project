import {Cv} from "@/graphql/interfaces/Cv.interface";
import {CvInput} from "@/graphql/interfaces/CvInput.interface";
import {User} from "@/graphql/interfaces/User.interface";

export const addMissingCvFieldsToRequest = (
  userId: User["id"] | undefined,
  formData: CvInput,
  otherData: Cv
): CvInput => {
  return {
    name: formData.name,
    description: formData.description,
    userId,
    projectsIds: otherData.projects.map(project => project.id),
    skills: otherData.skills.map(skill => {
      return {
        skill_name: skill.skill_name,
        mastery: skill.mastery,
      };
    }),
    languages: otherData.languages.map(language => {
      return {
        language_name: language.language_name,
        proficiency: language.proficiency,
      };
    }),
    is_template: formData.is_template,
  };
};
