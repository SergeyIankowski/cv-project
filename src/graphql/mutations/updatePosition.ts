import {gql} from "@apollo/client";

export const UPDATE_POSITION = gql`
  mutation updatePosition($id: ID!, $position: PositionInput!) {
    updatePosition(id: $id, position: $position) {
      id
    }
  }
`;
