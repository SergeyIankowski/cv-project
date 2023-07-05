import {gql} from "@apollo/client";

export const DELETE_SKILL = gql`
  mutation ($id: ID!) {
    deleteSkill(id: $id) {
      affected
    }
  }
`;
