import {gql} from "@apollo/client";

export const DELETE_POSITION = gql`
  mutation deletePosition($id: ID!) {
    deletePosition(id: $id) {
      affected
    }
  }
`;
