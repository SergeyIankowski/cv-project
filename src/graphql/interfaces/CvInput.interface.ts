import {Cv} from "./Cv.interface";
import {LanguageProficiencyInput} from "./LanguageProficiencyInput.interface";
import {Project} from "./Project.interface";
import {SkillMasteryInput} from "./SkillMasteryInput.interface";
import {User} from "./User.interface";

export interface CvInput {
  name: Cv["name"];
  description: Cv["description"];
  userId?: User["id"];
  projectsIds?: Project["id"][];
  skills: SkillMasteryInput[];
  languages: LanguageProficiencyInput[];
  is_template: Cv["is_template"];
}
