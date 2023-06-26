import {Department} from "./Department.interface";
import {Position} from "./Position.interface";
import {ProfileInput} from "./ProfileInput.interface";

export interface UpdateUserInput {
  profile: ProfileInput;
  cvsIds?: string[];
  departmentId?: Department["id"];
  positionId?: Position["id"];
}
