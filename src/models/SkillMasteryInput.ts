import {SkillsMastery} from "./SkillsMastery";

export interface SkillMasteryInput {
  skill_name: string;
  mastery:
    | SkillsMastery.advanced
    | SkillsMastery.competent
    | SkillsMastery.expert
    | SkillsMastery.novice
    | SkillsMastery.proficient;
}
