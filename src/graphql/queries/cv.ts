import {gql} from "@apollo/client";

export const CV = gql`
  query cv($id: ID!) {
    cv(id: $id) {
      name
      description
      user {
        id
        email
        profile {
          avatar
          full_name
        }
        position_name
        department_name
      }
      projects {
        id
        name
        description
        internal_name
        domain
        start_date
        end_date
        team_size
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
