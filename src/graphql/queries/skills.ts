import {gql} from "@apollo/client";

export const SKILLS = gql`
  query skills {
    skills {
      id
      name
    }
  }
`;
