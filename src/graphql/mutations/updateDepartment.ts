import {gql} from "@apollo/client";

export const UPDATE_DEPARTMENT = gql`
  mutation ($id: ID!, $department: DepartmentInput!) {
    updateDepartment(id: $id, department: $department) {
      id
    }
  }
`;
