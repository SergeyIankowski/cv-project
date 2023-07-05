import {gql} from "@apollo/client";

export const CREATE_DEPARTMENT = gql`
  mutation ($department: DepartmentInput!) {
    createDepartment(department: $department) {
      id
    }
  }
`;
