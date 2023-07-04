import {gql} from "@apollo/client";

export const CREATE_SKILL = gql`
  mutation createSkill($skill: SkillInput!) {
    createSkill(skill: $skill) {
      id
    }
  }
`;
