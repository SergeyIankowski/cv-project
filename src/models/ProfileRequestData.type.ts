import {ProfileInput} from "@/graphql/interfaces/ProfileInput.interface";
import {Department} from "@/graphql/interfaces/Department.interface";
import {Position} from "@/graphql/interfaces/Position.interface";

export interface ProfileRequestData {
  profile: Pick<ProfileInput, "first_name" | "last_name">;
  departmentId?: Department["id"];
  positionId: Position["id"];
}
