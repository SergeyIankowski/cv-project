import {gql} from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      profile {
        first_name
        last_name
      }
      department_name
      position_name
    }
  }
`;
