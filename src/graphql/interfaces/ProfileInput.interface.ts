import {LanguageProficiencyInput} from "./LanguageProficiencyInput.interface";
import {SkillMasteryInput} from "./SkillMasteryInput.interface";

export interface ProfileInput {
  first_name?: string;
  last_name?: string;
  skills?: SkillMasteryInput[];
  languages?: LanguageProficiencyInput[];
}
