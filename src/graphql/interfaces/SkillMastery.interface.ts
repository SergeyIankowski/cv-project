import {SkillsMastery} from "@/models/SkillsMastery";

export interface SkillMastery {
  skill_name: string;
  mastery:
    | SkillsMastery.advanced
    | SkillsMastery.competent
    | SkillsMastery.expert
    | SkillsMastery.novice
    | SkillsMastery.proficient;
}
