import {SkillsMastery} from "@/models/SkillsMastery";
import {LanguagesProficiency} from "@/models/LanguagesProficiency";
import {CvInput} from "@/graphql/interfaces/CvInput.interface";
import {User} from "@/graphql/interfaces/User.interface";

export const convertUpdateCvFormDataToRequestData = (
  userId: User["id"],
  data: CvInput
): CvInput => {
  return {
    name: data.name,
    description: data.description,
    userId,
    projectsIds: [245],
    skills: [
      {
        skill_name: "some",
        mastery: SkillsMastery.expert,
      },
    ],
    languages: [
      {
        language_name: "English",
        proficiency: LanguagesProficiency.a1,
      },
    ],
    is_template: data.is_template,
  };
};
