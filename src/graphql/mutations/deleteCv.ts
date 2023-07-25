import {gql} from "@apollo/client";

export const DELETE_CV = gql`
  mutation deleteCv($id: ID!) {
    deleteCv(id: $id) {
      affected
    }
  }
`;
