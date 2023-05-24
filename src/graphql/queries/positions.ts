import {gql} from "@apollo/client";

export const POSITIONS = gql`
  query positions {
    departments {
      name
    }
  }
`;
