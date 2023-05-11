import {gql} from "@apollo/client";

export const LOGIN_QUERY = gql`
  query login($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
      }
      access_token
    }
  }
`;
