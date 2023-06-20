import {SkillsMastery} from "@/models/SkillsMastery";
import {LanguagesProficiency} from "@/models/LanguagesProficiency";
import {Cv} from "@/models/Cv.type";

export const convertUpdateCvFormDataToRequestData = (
  userId: number | string,
  data: Cv
): Required<Cv> => {
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
