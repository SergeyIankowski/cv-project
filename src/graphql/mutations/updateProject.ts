import {gql} from "@apollo/client";

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $project: ProjectInput!) {
    updateProject(id: $id, project: $project) {
      id
      name
      internal_name
      description
      domain
      start_date
      end_date
      team_size
      tech_stack {
        name
      }
    }
  }
`;
