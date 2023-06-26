import {ID} from "./ID.type";
import {LanguageProficiency} from "./LanguageProficiency.interface";
import {SkillMastery} from "./SkillMastery.interface";

export interface Profile {
  id: ID;
  created_at: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  avatar?: string;
  skills: SkillMastery[];
  languages: LanguageProficiency[];
}
