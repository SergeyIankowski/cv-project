import {gql} from "@apollo/client";

export const SIGN_UP = gql`
  mutation signup($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        email
        role
      }
      access_token
    }
  }
`;
