import {Skill} from "@/graphql/interfaces/Skill.interface";
import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";

export const getSkillsNamesWithoutChoosed = (
  initial: Skill[],
  skillsForDeleting: SkillMastery[]
) => {
  const copySkills = [...initial];
  const userDataSkillsNames = skillsForDeleting.map(skill => skill.skill_name);
  return copySkills.filter(item => !userDataSkillsNames.includes(item.name));
};
