import {gql} from "@apollo/client";

export const CVS = gql`
  query {
    cvs {
      id
      name
      description
      user {
        email
      }
      is_template
    }
  }
`;
