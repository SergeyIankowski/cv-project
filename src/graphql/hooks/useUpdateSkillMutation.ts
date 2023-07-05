import {useMutation} from "@apollo/client";
import {UPDATE_SKILL} from "../mutations";
import {Skill} from "../interfaces/Skill.interface";
import {SkillInput} from "../interfaces/SkillInput";
import {SKILLS} from "../queries";

export const useUpdateSkillMutation = () => {
  const [loadData] = useMutation(UPDATE_SKILL, {refetchQueries: [SKILLS]});
  const updateSkill = async (id: Skill["id"], skill: SkillInput) => {
    await loadData({variables: {id, skill}});
  };

  return {updateSkill};
};
