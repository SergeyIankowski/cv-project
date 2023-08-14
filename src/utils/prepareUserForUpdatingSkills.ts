import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";
import {UpdateUserInput} from "@/graphql/interfaces/UpdateUserInput.interface";
import {ProfileInput} from "@/graphql/interfaces/ProfileInput.interface";
import {FetchedUser} from "@/models/FetchedUser.type";

export const prepareUserForUpdatingSkills = (
  oldUser: FetchedUser,
  skills: SkillMastery[]
): UpdateUserInput => {
  const profile: ProfileInput = {
    first_name: oldUser.profile.first_name,
    last_name: oldUser.profile.last_name,
    skills: skills.map(skill => {
      return {
        skill_name: skill.skill_name,
        mastery: skill.mastery,
      };
    }),
    languages: oldUser.profile.languages?.map(language => {
      return {
        language_name: language.language_name,
        proficiency: language.proficiency,
      };
    }),
  };
  return {
    profile,
    departmentId: oldUser?.department?.id || "",
    positionId: oldUser?.position?.id || "",
  };
};
