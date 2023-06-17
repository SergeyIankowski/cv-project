import {gql} from "@apollo/client";

export const UNBIND_CV = gql`
  mutation ($id: ID!) {
    unbindCv(id: $id) {
      id
    }
  }
`;
