import {CvInput} from "@/graphql/interfaces/CvInput.interface";
import {LanguageProficiency} from "@/graphql/interfaces/LanguageProficiency.interface";
import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";

export interface CreateCvFormFields {
  name: CvInput["name"];
  description: CvInput["description"];
  userId?: CvInput["userId"];
  projectsIds?: CvInput["projectsIds"];
  skills: SkillMastery[];
  languages: LanguageProficiency[];
  is_template: CvInput["is_template"];
}
