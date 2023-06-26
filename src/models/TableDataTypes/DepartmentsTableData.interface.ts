import {Department} from "@/graphql/interfaces/Department.interface";

export interface DepartmentsTableData {
  id: Department["id"];
  name: Department["name"];
}
