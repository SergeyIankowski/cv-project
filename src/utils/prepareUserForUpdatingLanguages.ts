import {LanguageProficiency} from "@/graphql/interfaces/LanguageProficiency.interface";
import {ProfileInput} from "@/graphql/interfaces/ProfileInput.interface";
import {UpdateUserInput} from "@/graphql/interfaces/UpdateUserInput.interface";
import {FetchedUser} from "@/models/FetchedUser.type";

export const prepareUserForUpdatingLanguages = (
  oldUser: FetchedUser,
  languages: LanguageProficiency[]
): UpdateUserInput => {
  const profile: ProfileInput = {
    first_name: oldUser.profile.first_name,
    last_name: oldUser.profile.last_name,
    skills: oldUser.profile.skills?.map(skill => {
      return {
        skill_name: skill.skill_name,
        mastery: skill.mastery,
      };
    }),
    languages: languages.map(language => {
      return {
        language_name: language.language_name,
        proficiency: language.proficiency,
      };
    }),
  };
  return {
    profile,
    departmentId: oldUser.department.id,
    positionId: oldUser.position.id,
  };
};
