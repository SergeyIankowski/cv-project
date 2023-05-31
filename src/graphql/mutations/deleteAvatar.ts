import {gql} from "@apollo/client";

export const DELETE_AVATAR = gql`
  mutation deleteAvatar($id: ID!) {
    deleteAvatar(id: $id)
  }
`;
