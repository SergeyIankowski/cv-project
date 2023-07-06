import {gql} from "@apollo/client";

export const DELETE_DEPARTMENT = gql`
  mutation ($id: ID!) {
    deleteDepartment(id: $id) {
      affected
    }
  }
`;
