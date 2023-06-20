import {SkillsMastery} from "@/models/SkillsMastery";
import {LanguagesProficiency} from "@/models/LanguagesProficiency";
import {UpdatedCv} from "@/models/UpdatedCv.type";

export const convertUpdateCvFormDataToRequestData = (
  userId: number | string,
  data: UpdatedCv
): Required<UpdatedCv> => {
  return {
    id: data.id,
    name: data.name,
    userId,
    description: data.description,
    projectsIds: 245,
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
