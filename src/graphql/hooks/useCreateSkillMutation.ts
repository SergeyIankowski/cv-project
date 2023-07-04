import {useMutation} from "@apollo/client";
import {CREATE_SKILL} from "@/graphql/mutations";
import {SKILLS} from "@/graphql/queries";
import {SkillInput} from "@/graphql/interfaces/SkillInput";

export const useCreateSkillMutation = () => {
  const [loadData] = useMutation(CREATE_SKILL, {refetchQueries: [SKILLS]});
  const createSkill = async (skill: SkillInput) => {
    await loadData({variables: {skill}});
  };

  return {createSkill};
};
