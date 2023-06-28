import {ROLES} from "@/models/Roles";
import {Department} from "./Department.interface";
import {Position} from "./Position.interface";
import {Profile} from "./Profile.interface";
import {Cv} from "./Cv.interface";
import {ID} from "./ID.type";

export interface User {
  id: ID;
  created_at: string;
  email: string;
  is_verified: string;
  profile: Profile;
  cvs?: Cv[];
  department?: Department;
  department_name?: string;
  position?: Position;
  position_name?: string;
  role: ROLES.admin | ROLES.employee;
}
