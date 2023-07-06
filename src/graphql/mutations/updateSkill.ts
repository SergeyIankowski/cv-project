import {gql} from "@apollo/client";

export const UPDATE_SKILL = gql`
  mutation ($id: ID!, $skill: SkillInput!) {
    updateSkill(id: $id, skill: $skill) {
      id
    }
  }
`;
