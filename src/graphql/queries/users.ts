import {gql} from "@apollo/client";

export const USERS = gql`
  query users {
    users {
      id
      profile {
        avatar
        first_name
        last_name
      }
      email
      department_name
      position_name
    }
  }
`;

export type UsersQuery = typeof USERS;
