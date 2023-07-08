import {gql} from "@apollo/client";

export const CV = gql`
  query cv($id: ID!) {
    cv(id: $id) {
      name
      description
      user {
        profile {
          full_name
        }
        position_name
      }
      projects {
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
