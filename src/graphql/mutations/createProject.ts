import {gql} from "@apollo/client";

export const CREATE_PROJECT = gql`
  mutation ($project: ProjectInput!) {
    createProject(project: $project) {
      id
    }
  }
`;
