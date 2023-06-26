import {LanguagesProficiencyInput} from "./LanguageProficiencyInput";
import {SkillMasteryInput} from "./SkillMasteryInput";

export interface UpdatedCv {
  id: string;
  name: string;
  userId?: string | number;
  description: string;
  projectsIds?: number[] | number;
  skills?: SkillMasteryInput[];
  languages?: LanguagesProficiencyInput[];
  is_template: boolean;
}
