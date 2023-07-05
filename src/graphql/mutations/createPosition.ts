import {gql} from "@apollo/client";

export const CREATE_POSITION = gql`
  mutation createPosition($position: PositionInput!) {
    createPosition(position: $position) {
      id
    }
  }
`;
