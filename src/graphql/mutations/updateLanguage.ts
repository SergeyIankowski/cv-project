import {gql} from "@apollo/client";

export const UPDATE_LANGUAGE = gql`
  mutation updateLanguage($id: ID!, $language: LanguageInput!) {
    updateLanguage(id: $id, language: $language) {
      id
    }
  }
`;
