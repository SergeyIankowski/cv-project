import {gql} from "@apollo/client";

export const CREATE_CV = gql`
  mutation ($cv: CvInput!) {
    createCv(cv: $cv) {
      id
    }
  }
`;
