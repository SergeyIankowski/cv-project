import {gql} from "@apollo/client";

export const PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
      id
      name
      internal_name
      description
      domain
      start_date
      end_date
      team_size
    }
  }
`;
