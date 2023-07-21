import {gql} from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      created_at
      profile {
        avatar
        first_name
        last_name
        full_name
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
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
