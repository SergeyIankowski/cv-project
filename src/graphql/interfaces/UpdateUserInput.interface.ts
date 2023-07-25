import {Cv} from "./Cv.interface";
import {Department} from "./Department.interface";
import {Position} from "./Position.interface";
import {ProfileInput} from "./ProfileInput.interface";

export interface UpdateUserInput {
  profile: ProfileInput;
  cvsIds?: Cv["id"][];
  departmentId: Department["id"];
  positionId: Position["id"];
}
