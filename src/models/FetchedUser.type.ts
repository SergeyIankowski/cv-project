import {ROLES} from "@/models/Roles";
import {CvData} from "./CvData";
import {DepartmentsData} from "./DepartmentsData.type";
import {PositionsData} from "./PositionsData.type";

export interface FetchedUser {
  id: string;
  created_at: string;
  profile: {
    avatar: string;
    first_name: string;
    last_name: string;
  };
  email: string;
  cvs: CvData[];
  department: DepartmentsData;
  position: PositionsData;
  role: ROLES.employee | ROLES.admin;
}
