import {User} from "./User.interface";
import {Project} from "./Project.interface";
import {LanguageProficiency} from "./LanguageProficiency.interface";
import {SkillMastery} from "./SkillMastery.interface";
import {ID} from "./ID.type";

export interface Cv {
  id: ID;
  created_at: string;
  name: string;
  description: string;
  user?: User;
  projects: Project[];
  skills: SkillMastery[];
  languages: LanguageProficiency[];
  is_template: boolean;
}
