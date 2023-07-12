import {gql} from "@apollo/client";

export const CV = gql`
  query cv($id: ID!) {
    cv(id: $id) {
      name
      description
      user {
        id
        profile {
          full_name
        }
        position_name
      }
      projects {
        id
        name
      }

      skills {
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
      is_template
    }
  }
`;
