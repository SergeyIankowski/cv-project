import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";

export type UpdateProfileSkillsFormFields = Pick<
  SkillMastery,
  "skill_name" | "mastery"
>;
