import {AuthInput} from "./AuthInput.interface";
import {Department} from "./Department.interface";
import {Position} from "./Position.interface";
import {ProfileInput} from "./ProfileInput.interface";

export interface CreateUserInput {
  auth: AuthInput;
  profile: ProfileInput;
  cvsIds: string[];
  departmentId?: Department["id"];
  positionId?: Position["id"];
  role: string;
}
