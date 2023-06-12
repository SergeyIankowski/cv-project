import {gql} from "@apollo/client";

export const SKILLS = gql`
  query {
    skills {
      id
      name
    }
  }
`;
