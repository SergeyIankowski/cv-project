import {CvData} from "./CvData";
import {LanguagesProficiencyInput} from "./LanguageProficiencyInput";
import {SkillMasteryInput} from "./SkillMasteryInput";

export interface Cv {
  id: CvData["id"];
  name: CvData["name"];
  userId?: string | number;
  description: CvData["description"];
  projectsIds?: number[] | number;
  skills?: SkillMasteryInput[];
  languages?: LanguagesProficiencyInput[];
  is_template: CvData["isTemplate"];
}
