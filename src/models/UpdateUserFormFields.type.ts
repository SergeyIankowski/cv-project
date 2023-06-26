import {Profile} from "@/graphql/interfaces/Profile.interface";
import {Department} from "@/graphql/interfaces/Department.interface";
import {Position} from "@/graphql/interfaces/Position.interface";

export interface UpdateUserFormFields {
  first_name: Profile["first_name"];
  last_name: Profile["last_name"];
  departmentId: Department["id"];
  positionId: Position["id"];
}
