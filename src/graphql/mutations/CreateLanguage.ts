import {gql} from "@apollo/client";

export const CREATE_LANGUAGE = gql`
  mutation createLanguage($language: LanguageInput!) {
    createLanguage(language: $language) {
      id
    }
  }
`;
