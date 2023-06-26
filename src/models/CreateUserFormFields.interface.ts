import {AuthInput} from "@/graphql/interfaces/AuthInput.interface";
import {Department} from "@/graphql/interfaces/Department.interface";
import {Position} from "@/graphql/interfaces/Position.interface";
import {ProfileInput} from "@/graphql/interfaces/ProfileInput.interface";
import {User} from "@/graphql/interfaces/User.interface";

export interface CreateUserFormFields {
  email: AuthInput["email"];
  password: AuthInput["password"];
  first_name: ProfileInput["first_name"];
  last_name: ProfileInput["last_name"];
  departmentId: Department["id"];
  positionId: Position["id"];
  role: User["role"];
}
