import {ROLES} from "@/models/Roles";
import {DepartmentsData} from "./DepartmentsData.type";
import {PositionsData} from "./PositionsData.type";
import {Cv} from "./Cv.type";

export interface FetchedUser {
  id: string;
  created_at: string;
  profile: {
    avatar: string;
    first_name: string;
    last_name: string;
  };
  email: string;
  cvs: Cv[];
  department: DepartmentsData;
  position: PositionsData;
  role: ROLES.employee | ROLES.admin;
}
