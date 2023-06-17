import {gql} from "@apollo/client";

export const CV = gql`
  query cv($id: ID!) {
    cv(id: $id) {
      name
      description
    }
  }
`;
