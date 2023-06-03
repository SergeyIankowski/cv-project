import {gql} from "@apollo/client";

export const PROJECTS = gql`
  query {
    projects {
      id
      name
      internal_name
      domain
      start_date
      end_date
      team_size
    }
  }
`;
