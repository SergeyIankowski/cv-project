import {AuthValues} from "./AuthValues.type";
import {ROLES} from "./Roles";
import {UploadedUser} from "./UploadedUser.type";

export interface CreatedUser {
  auth: AuthValues;
  profile: Pick<UploadedUser, "first_name" | "last_name">;
  departmentId: UploadedUser["departmentId"];
  positionId: UploadedUser["positionId"];
  cvsIds: string;
  role: ROLES.admin | ROLES.employee;
}
