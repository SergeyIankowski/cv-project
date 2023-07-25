import {CvInput} from "@/graphql/interfaces/CvInput.interface";
import {User} from "@/graphql/interfaces/User.interface";
import {CreateCvFormFields} from "@/models/FormFieldsTypes";

export const addSkillsAndLanguagesToNewCv = (
  userData: User,
  cvData: CreateCvFormFields
): CvInput => {
  return {
    ...cvData,
    projectsIds: [],
    skills: userData.profile.skills.map(skill => {
      return {
        skill_name: skill.skill_name,
        mastery: skill.mastery,
      };
    }),
    languages: userData.profile.languages.map(language => {
      return {
        language_name: language.language_name,
        proficiency: language.proficiency,
      };
    }),
  };
};
