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
        full_name
        skills {
          skill_name
        }
        languages {
          language_name
        }
      }
      cvs {
        id
        name
        description
        is_template
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
