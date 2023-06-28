import {Department} from "@/graphql/interfaces/Department.interface";
import {Position} from "@/graphql/interfaces/Position.interface";
import {Profile} from "@/graphql/interfaces/Profile.interface";
import {User} from "@/graphql/interfaces/User.interface";

export interface FetchedUser {
  id: User["id"];
  created_at: User["created_at"];
  profile: Partial<Profile>;
  email: User["email"];
  cvs: User["cvs"];
  department: Pick<Department, "id" | "name">;
  position: Pick<Position, "id" | "name">;
  role: User["role"];
}
