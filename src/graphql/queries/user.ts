import {gql} from "@apollo/client";

export const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      created_at
      profile {
        avatar
        first_name
        last_name
      }
      email
      department_name
      position_name
      role
    }
  }
`;
