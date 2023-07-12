import {gql} from "@apollo/client";

export const DELETE_LANGUAGE = gql`
  mutation deleteLanguage($id: ID!) {
    deleteLanguage(id: $id) {
      affected
    }
  }
`;
