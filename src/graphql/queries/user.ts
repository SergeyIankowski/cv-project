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
      cvs {
        id
        name
      }
      email
      department {
        id
        name
      }
      position {
        id
        name
      }
      role
    }
  }
`;
