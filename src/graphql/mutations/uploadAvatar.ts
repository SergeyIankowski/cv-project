import {gql} from "@apollo/client";

export const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($id: ID!, $avatar: AvatarInput!) {
    uploadAvatar(id: $id, avatar: $avatar)
  }
`;
