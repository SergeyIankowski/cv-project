import {gql} from "@apollo/client";

export const UPDATE_CV = gql`
  mutation updateCv($id: ID!, $cv: CvInput!) {
    updateCv(id: $id, cv: $cv) {
      id
    }
  }
`;
