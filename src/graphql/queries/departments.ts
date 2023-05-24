import {gql} from "@apollo/client";

export const DEPARTMENTS = gql`
  query departments {
    departments {
      name
    }
  }
`;
