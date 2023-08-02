import {gql} from "@apollo/client";

export const LOGIN_QUERY = gql`
  query login($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
        email
        role
      }
      access_token
    }
  }
`;
