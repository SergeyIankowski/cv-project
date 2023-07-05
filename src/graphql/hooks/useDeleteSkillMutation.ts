import {useMutation} from "@apollo/client";
import {DELETE_SKILL} from "../mutations";
import {SKILLS} from "../queries";
import {Skill} from "../interfaces/Skill.interface";

export const useDeleteSkillMutation = () => {
  const [loadData] = useMutation(DELETE_SKILL, {refetchQueries: [SKILLS]});
  const deleteSkill = async (id: Skill["id"]) => {
    await loadData({variables: {id}});
  };

  return {deleteSkill};
};
